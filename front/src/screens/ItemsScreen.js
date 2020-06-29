import React from 'react';
import {observer, inject} from 'mobx-react';
import {ItemList} from '../components/ItemList';

const ItemsScreen = ({store}) => {
  return <ItemList onOpen={() => console.log('addToCart')} items={store.items}/>;
};

ItemsScreen.navigationOptions = () => {
  return {
    title: 'Список товаров',
  };
};

export default inject(({store}) => ({store}))(observer(ItemsScreen));
