import React, {useEffect} from 'react';
import {observer, inject} from 'mobx-react';
import {CategoryList} from '../components/CategoryList';

const CategoryScreen = ({navigation, productStore}) => {
  useEffect(() => {
    productStore.getCategories();
  }, []);

  const openCategoryHandler = async categoryId => {
    await productStore.getItems(categoryId, 1);
    navigation.navigate('Items', {
      categoryId,
    });
  };

  return (
    <CategoryList
      onOpen={openCategoryHandler}
      categories={productStore.categories}
    />
  );
};

CategoryScreen.navigationOptions = () => {
  return {
    title: 'Категории товаров',
  };
};

export default inject(({productStore}) => ({productStore}))(
  observer(CategoryScreen),
);
