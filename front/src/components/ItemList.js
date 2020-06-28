import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Item} from './Item';

const items = [
  {
    id: 1,
    category: 1,
    name: 'Телевизор #1',
    price: 100,
    property: 'Значение свойства #1',
  },
  {
    id: 2,
    category: 1,
    name: 'Телевизор #1',
    price: 100,
    property: 'Значение свойства #1',
  },
  {
    id: 3,
    category: 1,
    name: 'Телевизор #1',
    price: 100,
    property: 'Значение свойства #1',
  },
  {
    id: 4,
    category: 1,
    name: 'Телевизор #1',
    price: 100,
    property: 'Значение свойства #1',
  },
  {
    id: 5,
    category: 1,
    name: 'Телевизор #1',
    price: 100,
    property: 'Значение свойства #1',
  },
];

const itemListPadding = 30;

export const ItemList = ({onOpen}) => {
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={styles(itemListPadding).wrapper}
      data={items}
      keyExtractor={item => item.id.toString()}
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
