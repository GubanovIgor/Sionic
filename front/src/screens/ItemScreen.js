import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const ItemScreen = () => {
  return (
    <View style={styles.container}>
      <Text>something</Text>
    </View>
  );
};

ItemScreen.navigationOptions = () => {
  return {
    title: 'Товар',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
