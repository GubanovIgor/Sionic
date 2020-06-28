import React from 'react';

import {CategoryList} from '../components/CategoryList';

export const CategoryScreen = ({navigation}) => {
  const openCategoryHandler = () => {
    navigation.navigate('Items')
  }
  return <CategoryList onOpen={openCategoryHandler} />;
};

CategoryScreen.navigationOptions = () => {
  return {
    title: 'Категории товаров',
  };
};
