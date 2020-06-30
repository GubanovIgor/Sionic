import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Provider} from 'mobx-react';
import ProductStore from './src/store/productStore';
import OrderStore from './src/store/orderStore';

class RootStore {
  constructor() {
    this.productStore = new ProductStore(this);
    this.orderStore = new OrderStore(this);
  }
}

const rootStore = new RootStore();

const App = () => {
  return (
    <Provider
      rootStore={rootStore}
      productStore={rootStore.productStore}
      orderStore={rootStore.orderStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
