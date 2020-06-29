import React from 'react';

import {ItemList} from '../components/ItemList';

export const ItemsScreen = ({navigation}) => {
  return <ItemList onOpen={() => console.log('addToCart')} />;
};

ItemsScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Список товаров',
  };
};
