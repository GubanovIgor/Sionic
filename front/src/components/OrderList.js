import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Order} from './Order';

const itemListPadding = 30;

export const OrderList = ({onOpen}) => {
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={styles(itemListPadding).wrapper}
      data={items}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <Order item={item} itemListPadding={itemListPadding} onOpen={onOpen} />
      )}
    />
  );
};

const styles = itemListPadding =>
  StyleSheet.create({
    wrapper: {
      padding: itemListPadding,
    },
  });
