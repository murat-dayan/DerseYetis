import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import Request from './pages/Home/Request/Request';
import auth from '@react-native-firebase/auth';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/AntDesign'
import Tabnavigation from './navigation/tabnavigation'
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {!userSession ? (
        <AuthStack />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'Ana Sayfa',
              headerTintColor: colors.compsBlue,
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color={colors.darkgreen}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
            name="TabPage"
            component={Tabnavigation}
          />

          
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />

    </NavigationContainer>
  );
};

export default App;
