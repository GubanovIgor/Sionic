import {observable, action} from 'mobx';

export default class ProductStore {
  @observable
  categories = [];
  items = [];

  @action
  async getCategories() {
    const res = await fetch('http://192.168.1.66:3000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const categories = await res.json();
    this.categories = categories;
  }

  @action
  async getItems(categoryId) {
    const res = await fetch(
      `http://192.168.1.66:3000/items?categoryId=${categoryId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      },
    );

    const items = await res.json();
    this.items = items;
  }
}
