import React from 'react';
import {observer, inject} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {ItemList} from '../components/ItemList';
import {toJS} from 'mobx';
import {Filter} from '../components/Filter';

const ItemsScreen = ({productStore, orderStore, route}) => {
  const categoryId = route.params.categoryId;

  const addItems = async () => {
    await productStore.getItems(categoryId, items.length);
  };

  const filterHandler = async filterType => {
    await productStore.getItems(categoryId, 1, filterType);
  };

  const items = toJS(productStore.items);

  const addToCartHandler = item => {
    orderStore.addToCart(item);
  };

  return (
    <View style={styles.container}>
      <Filter filterHandler={filterHandler} />
      <ItemList
        addToCart={addToCartHandler}
        items={items}
        addItems={addItems}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

ItemsScreen.navigationOptions = () => {
  return {
    title: 'Список товаров',
  };
};

export default inject(({productStore, orderStore}) => ({
  productStore,
  orderStore,
}))(observer(ItemsScreen));
