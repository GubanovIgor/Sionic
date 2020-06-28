import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MainNavigation} from './MainNavigation';
import {OrderNavigation} from './OrderNavigation';
import {CartNavigation} from './CartNavigation';

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
          backgroundColor: '#6c42f5',
          elevation: 0,
          borderTopWidth: 0,
        }
      : {
          backgroundColor: '#fff',
          borderTopWidth: 2,
          borderTopColor: '#6c42f5',
          shadowOpacity: 0,
        }),
  },
};
