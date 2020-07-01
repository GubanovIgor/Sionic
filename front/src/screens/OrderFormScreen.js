import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

import {THEME} from '../theme';

export const OrderFormScreen = () => {
  const reviewSchema = yup.object().shape({
    name: yup.string().required('Укажите имя'),
    adress: yup.string().required('Укажите адрес'),
    phone: yup.string().required('Укажите телфон'),
  });

  const confirmOrder = () => {
    console.log('it works');
  };

  return (
    <Formik
      initialValues={{name: '', adress: '', phone: ''}}
      onSubmit={values => confirmOrder(values)}
      validationSchema={reviewSchema}>
      {({handleChange, handleSubmit, values, touched, errors}) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="имя"
              placeholderTextColor={THEME.onSurface}
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.alertText}>{errors.name}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="адрес"
              placeholderTextColor={THEME.onSurface}
              onChangeText={handleChange('adress')}
              value={values.adress}
              secureTextEntry
              autoCorrect={false}
            />
            {touched.adress && errors.adress && (
              <Text style={styles.alertText}>{errors.adress}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="телефон"
              placeholderTextColor={THEME.onSurface}
              onChangeText={handleChange('phone')}
              value={values.phone}
              secureTextEntry
              autoCorrect={false}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.alertText}>{errors.phone}</Text>
            )}

            <TouchableOpacity style={styles.placeOrder} onPress={handleSubmit}>
              <Text style={styles.placOrderText}>ОФОРМИТЬ ЗАКАЗ</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 270,
    borderBottomWidth: 1,
    borderColor: THEME.MAIN,
    marginBottom: 15,
    paddingVertical: 5,

    fontSize: 16,
    textAlign: 'center',
  },
  alertText: {
    fontSize: 14,
    color: THEME.DANGER,
    marginTop: -10,
  },
  placeOrder: {
    backgroundColor: THEME.MAIN,
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
  },
  placOrderText: {
    color: '#fff',
    textAlign: 'center',
  },
});

OrderFormScreen.navigationOptions = () => {
  return {
    title: 'Товар',
  };
};
