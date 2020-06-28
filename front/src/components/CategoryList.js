import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Category} from './Category';

const categories = [
  {
    id: 1,
    name: 'Телевизоры',
  },
  {
    id: 2,
    name: 'Холодильники',
  },
  {
    id: 3,
    name: 'Пылесосы',
  },
  {
    id: 4,
    name: 'Квадрокоптеры',
  },
];

export const CategoryList = ({onOpen}) => {
  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={categories}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <Category category={item} onOpen={onOpen} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
