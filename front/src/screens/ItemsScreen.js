import React from 'react';
import {observer, inject} from 'mobx-react';
import {ItemList} from '../components/ItemList';

const ItemsScreen = ({productStore}) => {
  return (
    <ItemList
      onOpen={() => console.log('addToCart')}
      items={productStore.items}
    />
  );
};

ItemsScreen.navigationOptions = () => {
  return {
    title: 'Список товаров',
  };
};

export default inject(({productStore}) => ({productStore}))(
  observer(ItemsScreen),
);
