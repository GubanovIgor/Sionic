import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainNavigation} from './MainNavigation';
import {OrderNavigation} from './OrderNavigation';
import {CartNavigation} from './CartNavigation';
import { THEME } from '../theme';

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator tabBarOptions={tabBarOptions}>
      <BottomNavigator.Screen name="Main" component={MainNavigation} />
      <BottomNavigator.Screen name="Cart" component={CartNavigation} />
      <BottomNavigator.Screen name="Orders" component={OrderNavigation} />
    </BottomNavigator.Navigator>
  );
};

const tabBarOptions = {
  showLabel: true,
  style: {
    ...(Platform.OS === 'android'
      ? {
          backgroundColor: THEME.MAIN,
          elevation: 0,
          borderTopWidth: 0,
        }
      : {
          backgroundColor: '#fff',
          borderTopWidth: 2,
          borderTopColor: THEME.MAIN,
          shadowOpacity: 0,
        }),
  },
};
