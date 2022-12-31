import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './InputCard.style';

const InputCard = ({placeholderText, onTypeInput, inputValue , isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text_input}
        placeholder={placeholderText}
        onChangeText={onTypeInput}
        value={inputValue}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default InputCard;
