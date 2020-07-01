import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {THEME} from '../theme';

export const CartItem = ({item, removeFromCart, changeAmount}) => {
  return (
    <View style={styles().container}>
      <Text style={styles().title}>{item.name}</Text>
      <TouchableOpacity
        style={styles(item.amount).button}
        onPress={item.amount !== 1 ? () => changeAmount(item, 'minus') : null}
        activeOpacity={item.amount !== 1 ? 0.2 : 1}>
        <Text style={styles().buttonText}>-</Text>
      </TouchableOpacity>
      <Text>{item.amount}</Text>
      <TouchableOpacity
        style={styles().button}
        onPress={() => changeAmount(item, 'plus')}>
        <Text style={styles().buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles().button, ...styles().deleteButton}}
        onPress={() => removeFromCart(item)}>
        <Text style={styles().buttonText}>УДАЛИТЬ</Text>
      </TouchableOpacity>
      <Text>{item.price * item.amount} ₽</Text>
    </View>
  );
};

const styles = itemAmount =>
  StyleSheet.create({
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
      backgroundColor: itemAmount === 1 ? THEME.DISABLED : THEME.MAIN,
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
