import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {CategoryScreen} from '../screens/CategoryScreen';
import {ItemsScreen} from '../screens/ItemsScreen';
import {screenDefaultOptions} from './navigationOptions/navigationOptions';

const MainNavigator = createStackNavigator();

export const MainNavigation = () => {
  return (
    <MainNavigator.Navigator screenOptions={screenDefaultOptions}>
      <MainNavigator.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={CategoryScreen.navigationOptions}
      />
      <MainNavigator.Screen
        name="Items"
        component={ItemsScreen}
        options={ItemsScreen.navigationOptions}
      />
    </MainNavigator.Navigator>
  );
};
