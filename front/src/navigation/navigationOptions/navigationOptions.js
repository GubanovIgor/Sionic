import {Platform} from 'react-native';
import {THEME} from '../../theme';

export const screenDefaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN : '#fff',
    elevation: 0,
    shadowOpacity: 0,
    ...(Platform.OS === 'ios' && {
      borderBottomWidth: 2,
      borderBottomColor: THEME.MAIN,
    }),
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN,
  cardStyle: {backgroundColor: '#fff'},
};
