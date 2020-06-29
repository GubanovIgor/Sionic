import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import {Category} from './Category';

export const CategoryList = ({onOpen, categories}) => {
  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={categories}
      keyExtractor={item => item._id.toString()}
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
