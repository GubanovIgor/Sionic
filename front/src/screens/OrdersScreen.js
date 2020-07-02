import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx';
import {OrderList} from '../components/OrderList';

const OrdersScreen = ({orderStore}) => {
  const orders = toJS(orderStore.orders);

  if (!orders.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text>Вы ещё не делали заказы</Text>
      </View>
    );
  }

  return <OrderList orders={orders} />;
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

OrdersScreen.navigationOptions = () => {
  return {
    title: 'Ваши заказы',
  };
};

export default inject(({orderStore}) => ({orderStore}))(observer(OrdersScreen));
