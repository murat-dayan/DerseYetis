import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../pages/Home/Home/Home'
import Request from '../../pages/Home/Request/Request'
import Icon from 'react-native-vector-icons/AntDesign'


const Tab=createBottomTabNavigator()

const Tabnavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen 
        name="RequestTab" 
        component={Request}
        options={{tabBarLabel:'İstekler' , tabBarIcon:({})=>( <Icon name='edit' size={22} color='black' />) }}   
      />
      <Tab.Screen 
         
        name="HomeTab" 
        component={Home} 
        options={{tabBarLabel:'Harita' , tabBarIcon:({})=>( <Icon name='find' size={22} color='black' />) }}   

      />
      
    </Tab.Navigator>
  )
}

export default Tabnavigation