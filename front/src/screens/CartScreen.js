import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {observer, inject} from 'mobx-react';
import {CartItemList} from '../components/CartItemList';
import {toJS} from 'mobx';
import {THEME} from '../theme';

const CartScreen = ({orderStore, navigation}) => {
  const items = toJS(orderStore.cart);

  const placeOrder = () => {
    navigation.navigate('OrderForm', {
      sum,
    });
  };

  const removeFromCart = item => {
    orderStore.removeFromCart(item);
  };

  const changeAmount = (item, sign) => {
    orderStore.changeAmount(item, sign);
  };

  if (!items.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Корзина пуста</Text>
      </View>
    );
  }

  const sum = items.reduce((accumulator, el) => {
    return accumulator + el.price * el.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <CartItemList
        items={items}
        removeFromCart={removeFromCart}
        changeAmount={changeAmount}
      />
      <View style={styles.sumWrapper}>
        <Text>СУММА:</Text>
        <Text>{sum} ₽</Text>
      </View>
      <TouchableOpacity style={styles.placeOrder} onPress={placeOrder}>
        <Text style={styles.placOrderText}>ОФОРМИТЬ ЗАКАЗ</Text>
      </TouchableOpacity>
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
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sumWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  placeOrder: {
    backgroundColor: THEME.MAIN,
    borderRadius: 10,
    padding: 10,
  },
  placOrderText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default inject(({orderStore}) => ({orderStore}))(observer(CartScreen));
