import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const Category = ({onOpen, category}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onOpen(category._id)}>
      <Text>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    height: 100,
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
});
