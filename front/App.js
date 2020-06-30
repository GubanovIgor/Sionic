import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Provider} from 'mobx-react';
import ProductStore from './src/store/store';

class RootStore {
  constructor() {
    this.productStore = new ProductStore(this);
  }
}

const rootStore = new RootStore();

const App = () => {
  return (
    <Provider rootStore={rootStore} productStore={rootStore.productStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
