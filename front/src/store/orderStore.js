import {observable, action} from 'mobx';
import {persist} from 'mobx-persist';

export default class OrderStore {
  @persist('list') @observable orders = [];

  @persist('list') @observable cart = [];

  @action
  async addToCart(item) {
    const newCart = [...this.cart];
    let check = false;

    newCart.map(el => {
      if (el._id === item._id) {
        check = true;
        el.amount++;
      }
    });

    if (!check) {
      item.amount = 1;
      newCart.push(item);
    }

    this.cart = newCart;
  }

  @action
  async removeFromCart(item) {
    let newCart = [...this.cart];
    newCart = newCart.filter(el => el._id !== item._id);
    this.cart = newCart;
  }

  @action
  async changeAmount(item, sign) {
    let newCart = [...this.cart];
    newCart.map(el => {
      if (el._id === item._id) {
        if (sign === 'plus') {
          el.amount++;
        } else {
          el.amount--;
        }
      }
    });
    this.cart = newCart;
  }

  @action
  async addOrder(order) {
    const newOrders = [...this.orders];
    newOrders.push(order);
    this.orders = newOrders;
  }

  @action
  async clearCart() {
    this.cart = [];
  }
}
