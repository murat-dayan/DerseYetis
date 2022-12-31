import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './ContentInputModal.style';
import Modal from 'react-native-modal';
import ButtonCard from '../ButtonCard'

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  function handleSend(){
    if(!text){
      return;
    }

    onSend(text)
    setText(null)
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection='down'
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Nereye gitmek istediğini belirt..."
            onChangeText={setText}
            multiline
          />
        </View>
        <ButtonCard buttonName='Gönder' onPressButton={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
