import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Order} from './Order';

export const OrderList = ({onOpen, orders}) => {
  return (
    <FlatList
      style={styles.container}
      data={orders}
      keyExtractor={item => item.date.toString()}
      renderItem={({item}) => <Order order={item} onOpen={onOpen} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
