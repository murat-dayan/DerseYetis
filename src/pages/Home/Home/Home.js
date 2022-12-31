import {View, Text, PermissionsAndroid, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './Home.style';
import Geolocation from '@react-native-community/geolocation';
import FloatingButton from '../../../components/FloatingButton';
import moment from 'moment/min/moment-with-locales';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../../utils/parseContentData';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

const Home = () => {
  const [location, setLocation] = useState(null);
  const [markerList, setMarkerList] = useState([]);

  useEffect(() => {
    database()
      .ref('locations/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setMarkerList(parsedData);
        console.log(markerList);
      });
  }, []);

  const getLocation = () => {

    

    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is' + res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);

            sendContent(location);
          },
          error => {
            // See error code charts below.
            console.log(error.message);
            showMessage({
              message: authErrorMessageParser(error.message),
              type: 'danger',
            });
          },
        );
      }
    });
  };

  function sendContent(location) {
    if (location == null) {
      return;
    }

    const userMail = auth().currentUser.email;

    const contentObj = {
      username: userMail.split('@')[0],
      date: moment(new Date()).utcOffset('GMT+03:00').format('LLLL'),
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    try {
      database().ref('locations/').push(contentObj);
      showMessage({
        message: "Konum isteğiniz atılmıştır",
        type: 'success',
      });
      
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.message),
        type: 'danger',
      });
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.34,
          longitude: 38.41,
          longitudeDelta: 0.5,
          latitudeDelta: 0.5,
        }}>

        {markerList.map(marker => (
          <Marker
          key={marker.id}
            coordinate={{latitude: marker.latitude , longitude: marker.longitude}}
            title={marker.username}
          />
        ))}
      </MapView>

      <FloatingButton
        floatingButtonText="İstek At"
        icon="plus"
        onPress={getLocation}
      />
    </View>
  );
};

export default Home;
