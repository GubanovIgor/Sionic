import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export const Item = ({item, onOpen, itemListPadding}) => {
  const itemWidth =
    ((Dimensions.get('window').width - itemListPadding * 2) / 100) * 45;

  return (
    <TouchableOpacity onPress={onOpen} style={styles(itemWidth).container}>
      <Text>Продукт</Text>
    </TouchableOpacity>
  );
};

const styles = itemWidth =>
  StyleSheet.create({
    container: {
      minWidth: itemWidth,
      height: itemWidth,
      borderWidth: 1,
      borderRadius: 20,
      padding: 20,
      marginVertical: 5,
    },
  });
