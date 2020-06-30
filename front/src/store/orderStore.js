import {observable, action} from 'mobx';

export default class OrderStore {
  @observable
  orders = [];
  @observable
  cart = [];

  @action
  async addToCart(item) {
    const newCart = [...this.cart];
    newCart.push(item);
    this.cart = newCart;
  }
}
