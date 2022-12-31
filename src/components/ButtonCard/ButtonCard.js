import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonCard.style'

const ButtonCard = ({buttonName, onPressButton}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable_container} onPress={onPressButton}>
        <Text style={styles.touchable_text}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCard