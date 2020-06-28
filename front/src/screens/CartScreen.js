import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>cart</Text>
    </View>
  );
};

CartScreen.navigationOptions = () => {
  return {
    title: 'Товар',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
