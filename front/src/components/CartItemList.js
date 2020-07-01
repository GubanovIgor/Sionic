import React from 'react';
import {FlatList} from 'react-native';
import {CartItem} from './CartItem';

export const CartItemList = ({items, removeFromCart, changeAmount}) => {
  return (
    <FlatList
      columnWrapperStyle={{flexDirection: 'column'}}
      data={items}
      keyExtractor={item => item._id.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <CartItem
          item={item}
          removeFromCart={removeFromCart}
          changeAmount={changeAmount}
        />
      )}
    />
  );
};
