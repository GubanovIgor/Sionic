import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {THEME} from '../theme';

export const Order = ({onOpen, itemListPadding}) => {
  const itemWidth =
    ((Dimensions.get('window').width - itemListPadding * 2) / 100) * 45;

  return (
    <TouchableOpacity onPress={onOpen} style={styles(itemWidth).container}>
      <Text>Заказ</Text>
    </TouchableOpacity>
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
    },
  });
