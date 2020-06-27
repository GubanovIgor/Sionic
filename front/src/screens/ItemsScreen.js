import React from 'react';
import {StyleSheet} from 'react-native';

import {ItemList} from '../components/ItemList';

export const ItemsScreen = ({navigation}) => {
  const itemOpenHandler = () => {
    navigation.navigate('Item');
  };
  return <ItemList onOpen={itemOpenHandler} />;
};

ItemsScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Список товаров',
  };
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
