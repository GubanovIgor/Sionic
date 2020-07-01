import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {THEME} from '../theme';
import dateformat from 'dateformat';

const items = [
  {name: 'qweq1', price: 1},
  {name: 'qweq2', price: 2},
  {name: 'qweq3', price: 3},
];

export const Order = ({order}) => {
  console.log(order);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>
        Дата заказа: {dateformat(order.date, 'dd.mm.yyyy')}
      </Text>
      <View style={styles.itemsContainer}>
        {order.orderContents.map((el, index) => {
          return (
            <View style={styles.item} key={index}>
              <Text>{el.name}</Text>
              <Text>{el.price}</Text>
            </View>
          );
        })}
      </View>
      <Text>Сумма: {order.sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderColor: THEME.MAIN,
    borderRadius: 20,
    padding: 20,
    marginVertical: 5,
  },
  date: {
    marginBottom: 20,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
