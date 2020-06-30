import React from 'react';
import {StyleSheet, View} from 'react-native';
import {observer, inject} from 'mobx-react';
import {CartItemList} from '../components/CartItemList';
import { toJS } from 'mobx';

const CartScreen = ({orderStore}) => {
  const items = toJS(orderStore.cart)

  return (
    <View style={styles.container}>
      <CartItemList items={items} />
    </View>
  );
};

CartScreen.navigationOptions = () => {
  return {
    title: 'Корзина',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

export default inject(({orderStore}) => ({orderStore}))(observer(CartScreen));
