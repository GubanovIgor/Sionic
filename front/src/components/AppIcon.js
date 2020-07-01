import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../theme';
import {Platform} from 'react-native';

export const AppIcon = ({name, focused}) => {
  return Platform.OS === 'android' ? (
    <Icon
      name={name}
      size={28}
      color={focused ? '#fff' : THEME.LIGHT}
      style={{marginBottom: -3}}
    />
  ) : (
    <Icon
      name={name}
      size={28}
      color={focused ? THEME.MAIN : THEME.LIGHT}
      style={{marginBottom: -3}}
    />
  );
};
