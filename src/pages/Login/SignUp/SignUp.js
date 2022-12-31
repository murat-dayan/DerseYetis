import {View, Text, Alert} from 'react-native';
import React from 'react';
import styles from './SignUp.style';
import Lottie from 'lottie-react-native';
import InputCard from '../../../components/InputCard/InputCard';
import ButtonCard from '../../../components/ButtonCard';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const SignUp = ({navigation}) => {
  const goBackLogin = () => {
    navigation.goBack();
  };

  const handleFormSubmit = async initialFormValues => {

    if (initialFormValues.password == '' || initialFormValues.usermail == '' || initialFormValues.repassword=='') {
      showMessage({
        message: 'Geçerli bilgileri girmediniz',
        type: 'danger',
      });
      return;
    }

    if (initialFormValues.password !== initialFormValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor!',
        type: 'danger',
      });
      console.log('şifreler uyuşmuyor');
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        initialFormValues.usermail,
        initialFormValues.password,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.goBack()
      console.log('kayıt başarılı');
    } catch (error) {
      console.log(error);
      console.log(initialFormValues);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>DERSE YETİŞ</Text>
      <View style={styles.logo_container}>
        <Lottie
          source={require('../../../assets/lottie/signLogo.json')}
          autoPlay
          loop
        />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.form_container}>
            <InputCard
              placeholderText="e postanızı giriniz"
              inputValue={values.username}
              onTypeInput={handleChange('usermail')}
            />
            <InputCard
              isSecure={true}
              placeholderText="Şifrenizi giriniz"
              inputValue={values.password}
              onTypeInput={handleChange('password')}
            />
            <InputCard
              isSecure={true}
              placeholderText="Şifrenizi tekrar giriniz"
              inputValue={values.repassword}
              onTypeInput={handleChange('repassword')}
            />
            <ButtonCard buttonName="Kayıt Ol" onPressButton={handleSubmit} />
            <ButtonCard buttonName="Geri" onPressButton={goBackLogin} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
