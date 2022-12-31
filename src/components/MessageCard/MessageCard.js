import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'

const MessageCard = ({message , onPressMessage}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressMessage}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{message.date}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
    </TouchableOpacity>
  )
}

export default MessageCard
