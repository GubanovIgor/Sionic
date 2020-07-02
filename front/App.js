import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Provider} from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import RootStore from './src/store/RootStore';
import {create} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

hydrate('order', RootStore.orderStore);

const App = () => {
  return (
    <Provider
      rootStore={RootStore}
      productStore={RootStore.productStore}
      orderStore={RootStore.orderStore}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
