import {Platform} from 'react-native';

export const screenDefaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? '#6c42f5' : '#fff',
    elevation: 0,
    shadowOpacity: 0,
    ...(Platform.OS === 'ios' && {
      borderBottomWidth: 2,
      borderBottomColor: '#6c42f5',
    }),
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : '#6c42f5',
  cardStyle: {backgroundColor: '#fff'},
};
