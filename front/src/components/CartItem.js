import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

export const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('minus')}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text>0</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('plus')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('remove')}>
        <Text style={styles.buttonText}>УДАЛИТЬ</Text>
      </TouchableOpacity>
      <Text>{item.price} ₽</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 10,
  },
  property: {},
  button: {
    backgroundColor: '#6c42f5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
