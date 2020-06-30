import React from 'react';
import {observer, inject} from 'mobx-react';
import {ItemList} from '../components/ItemList';

const ItemsScreen = ({productStore, orderStore}) => {
  const addToCartHandler = item => {
    // console.log(productStore);
    console.log(orderStore.cart);
    orderStore.addToCart(item);
  };

  return <ItemList addToCart={addToCartHandler} items={productStore.items} />;
};

ItemsScreen.navigationOptions = () => {
  return {
    title: 'Список товаров',
  };
};

export default inject(({productStore, orderStore}) => ({
  productStore,
  orderStore,
}))(observer(ItemsScreen));
