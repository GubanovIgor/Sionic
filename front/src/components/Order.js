import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {THEME} from '../theme';
import dateformat from 'dateformat';

export const Order = ({order}) => {
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
