import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {THEME} from '../theme';

export const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('minus')}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text>0</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('plus')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, ...styles.deleteButton}}
        onPress={() => console.log('remove')}>
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
    borderColor: THEME.MAIN,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 10,
  },
  button: {
    backgroundColor: THEME.MAIN,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: THEME.DANGER,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
});
