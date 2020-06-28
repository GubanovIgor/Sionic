import React from 'react';

import {OrderList} from '../components/OrderList';

export const OrdersScreen = ({navigation}) => {
  const itemOpenHandler = () => {
    navigation.navigate('Order');
  };
  return <OrderList onOpen={itemOpenHandler} />;
};

OrdersScreen.navigationOptions = () => {
  return {
    title: 'Список товаров',
  };
};
