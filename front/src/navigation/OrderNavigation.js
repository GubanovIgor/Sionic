import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OrdersScreen} from '../screens/OrdersScreen';
import {OrderScreen} from '../screens/OrderScreen';
import {screenDefaultOptions} from './navigationOptions/navigationOptions';

const OrderNavigator = createStackNavigator();

export const OrderNavigation = () => {
  return (
    <OrderNavigator.Navigator screenOptions={screenDefaultOptions}>
      <OrderNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={OrdersScreen.navigationOptions}
      />
      <OrderNavigator.Screen
        name="Order"
        component={OrderScreen}
        options={OrderScreen.navigationOptions}
      />
    </OrderNavigator.Navigator>
  );
};
