import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import { THEME } from '../theme';

export const Item = ({item, addToCart, itemListPadding}) => {
  const itemWidth =
    ((Dimensions.get('window').width - itemListPadding * 2) / 100) * 45;

  return (
    <View style={styles(itemWidth).container}>
      <Text style={styles().title}>{item.name}</Text>
      <Text>{item.price} ₽</Text>
      <Text style={styles().title}>{item.property}</Text>
      <TouchableOpacity style={styles().button} onPress={() => addToCart(item)}>
        <Text style={styles().buttonText}>В КОРЗИНУ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = itemWidth =>
  StyleSheet.create({
    container: {
      minWidth: itemWidth,
      height: itemWidth,
      borderWidth: 1,
      borderColor: THEME.MAIN,
      borderRadius: 20,
      padding: 20,
      marginVertical: 5,
      justifyContent: 'space-between',
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
    buttonText: {
      fontSize: 12,
      color: '#fff',
      textAlign: 'center',
    },
  });
