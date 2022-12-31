import {View, Text, Image} from 'react-native';
import React from 'react';
import ButtonCard from '../../../components/ButtonCard';
import InputCard from '../../../components/InputCard/InputCard';
import styles from './Login.style';
import Lottie from 'lottie-react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const goSignUpPage = () => {
    navigation.navigate('SignUpPage');
  };

  const handleFormSubmit = async initialFormValues => {

    if (initialFormValues.password == '' || initialFormValues.usermail == '') {
      showMessage({
        message: 'Geçerli bilgileri girmediniz',
        type: 'danger',
      });
      return;
    }

    try {
      let response = await auth().signInWithEmailAndPassword(
        initialFormValues.usermail,
        initialFormValues.password,
      );

      if (response) {
        console.log(response);
      }
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
    console.log(initialFormValues);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>DERSE YETİŞ</Text>
      <View style={styles.logo_container}>
        <Lottie
          source={require('../../../assets/lottie/logo.json')}
          autoPlay
          loop
        />
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <View style={styles.form_container}>
            <InputCard
              placeholderText="İsminizi giriniz"
              inputValue={values.username}
              onTypeInput={handleChange('usermail')}
            />
            <InputCard
              isSecure={true}
              placeholderText="Şifrenizi giriniz"
              inputValue={values.password}
              onTypeInput={handleChange('password')}
            />
            <ButtonCard buttonName="Giriş Yap" onPressButton={handleSubmit} />
            <ButtonCard buttonName="Kayıt Ol" onPressButton={goSignUpPage} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
