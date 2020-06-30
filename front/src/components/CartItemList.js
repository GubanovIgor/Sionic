import React from 'react';
import {FlatList, Text} from 'react-native';
import {CartItem} from './CartItem';

export const CartItemList = ({items}) => {
  if (items.length) {
    return (
      <FlatList
        columnWrapperStyle={{flexDirection: 'column'}}
        data={items}
        keyExtractor={item => item._id.toString()}
        numColumns={2}
        renderItem={({item}) => <CartItem item={item} />}
      />
    );
  } else {
    return <Text>Корзина пуста</Text>;
  }
};
