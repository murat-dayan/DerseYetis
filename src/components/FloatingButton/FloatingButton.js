import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './FloatingButton.style'

const FloatingButton = ({icon, onPress , floatingButtonText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.floating_button_text}>{floatingButtonText}</Text>
      <TouchableOpacity style={styles.touchable_container} onPress={onPress}>
        <Icon name={icon} color='white' size={22}/>
    </TouchableOpacity>
    </View>
  )
}

export default FloatingButton