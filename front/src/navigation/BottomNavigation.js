import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainNavigation} from './MainNavigation';
import {OrderNavigation} from './OrderNavigation';
import {CartNavigation} from './CartNavigation';
import {THEME} from '../theme';
import {AppIcon} from '../components/AppIcon';
import {Platform} from 'react-native';

const BottomNavigator = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <BottomNavigator.Navigator tabBarOptions={tabBarOptions}>
      <BottomNavigator.Screen
        name="Main"
        component={MainNavigation}
        options={bottomMainScreenOptions}
      />
      <BottomNavigator.Screen
        name="Cart"
        component={CartNavigation}
        options={bottomCartScreenOptions}
      />
      <BottomNavigator.Screen
        name="Orders"
        component={OrderNavigation}
        options={bottomOrdersScreenOptions}
      />
    </BottomNavigator.Navigator>
  );
};

const tabBarOptions = {
  showLabel: false,
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

const bottomMainScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => (
      <AppIcon focused={focused} name="home" size={24} />
    ),
  };
};

const bottomCartScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => (
      <AppIcon focused={focused} name="shopping-cart" size={24} />
    ),
  };
};

const bottomOrdersScreenOptions = () => {
  return {
    tabBarIcon: ({focused}) => (
      <AppIcon focused={focused} name="list-alt" size={24} />
    ),
  };
};
