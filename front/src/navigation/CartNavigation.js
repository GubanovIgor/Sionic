import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CartScreen from '../screens/CartScreen';
import {screenDefaultOptions} from './navigationOptions/navigationOptions';

const CartNavigator = createStackNavigator();

export const CartNavigation = () => {
  return (
    <CartNavigator.Navigator screenOptions={screenDefaultOptions}>
      <CartNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={CartScreen.navigationOptions}
      />
    </CartNavigator.Navigator>
  );
};
