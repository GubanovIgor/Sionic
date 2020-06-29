import React, { useEffect } from 'react';
import {observer, inject} from 'mobx-react';
import {CategoryList} from '../components/CategoryList';

const CategoryScreen = ({navigation, store}) => {
  useEffect(() => {
    store.getCategories()
  }, [])

  const openCategoryHandler = async (categoryId) => {
    await store.getItems(categoryId)
    navigation.navigate('Items');
  };
  return <CategoryList onOpen={openCategoryHandler} categories={store.categories}/>;
};

CategoryScreen.navigationOptions = () => {
  return {
    title: 'Категории товаров',
  };
};

export default inject(({store}) => ({store}))(observer(CategoryScreen));
