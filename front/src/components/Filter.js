import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';

export const Filter = ({filterHandler}) => {
  return (
    <View style={styles.container}>
      <Text>Сортировать по:</Text>
      <View>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => filterHandler('name')}>
          <Text style={styles.text}>Алфавиту</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => filterHandler('price')}>
          <Text style={styles.text}>Ценам</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  radioButton: {
    backgroundColor: THEME.MAIN,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
  },
});
