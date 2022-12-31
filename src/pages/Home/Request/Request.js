import {View, Text, PermissionsAndroid , FlatList} from 'react-native';
import React, {useState , useEffect } from 'react';
import styles from './Request.style';
import Geolocation from '@react-native-community/geolocation';
import FloatingButton from '../../../components/FloatingButton'
import MessageCard from '../../../components/MessageCard'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import parseContentData from '../../../utils/parseContentData'
import ContentInputModal from '../../../components/ContentInputModal'
import moment from 'moment/min/moment-with-locales'




moment.locale('tr')
console.log(moment.locale())



const Request = ({navigation}) => {
  const [location, setLocation] = useState(0);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([])

  

  useEffect(()=>{
    database().ref('messages/').on('value' , snapshot =>{
      const contentData=snapshot.val()
      const parsedData=parseContentData(contentData || {})
      setContentList(parsedData)
    })
  },[])

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle()
    sendContent(content)
  }

  function sendContent(content){
    const userMail=auth().currentUser.email

    const contentObj={
      text:content,
      username: userMail.split('@')[0],
      date: moment(new Date()).utcOffset('GMT+03:00').format('LLLL')
    }

    database().ref('messages/').push(contentObj)
  }

  function handleGoMaps(){
    navigation.navigate('TabPage', { screen: 'HomeTab' })
  }

  const renderContent=({item})=><MessageCard message={item} onPressMessage={handleGoMaps} />
  

  return (
    <View style={styles.container}>
      <FlatList 
          data={contentList}
          renderItem={renderContent}
      />
      <FloatingButton floatingButtonText='Not Ekle' icon='edit' onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />

      
      
    </View>
  );
};

export default Request;
