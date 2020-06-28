import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text>order</Text>
    </View>
  );
};

OrderScreen.navigationOptions = () => {
  return {
    title: 'Товар',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
