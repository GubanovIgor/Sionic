import React from 'react';
import {observer, inject} from 'mobx-react';
import {ItemList} from '../components/ItemList';
import {toJS} from 'mobx';

const ItemsScreen = ({productStore, orderStore, route}) => {
  const categoryId = route.params.categoryId;

  const addItems = async () => {
    await productStore.getItems(categoryId, items.length);
  };

  const items = toJS(productStore.items);

  const addToCartHandler = item => {
    orderStore.addToCart(item);
  };

  return (
    <ItemList addToCart={addToCartHandler} items={items} addItems={addItems} />
  );
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
