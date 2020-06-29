import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Item} from './Item';

const itemListPadding = 30;

export const ItemList = ({onOpen, items}) => {
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={styles(itemListPadding).wrapper}
      data={items}
      keyExtractor={item => item._id.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <Item item={item} itemListPadding={itemListPadding} onOpen={onOpen} />
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
