import React from 'react';
import {AppNavigation} from './src/navigation/AppNavigation';
import {Provider} from 'mobx-react';
import Store from './src/store/store';

const App = () => {
  return (
    <Provider store={new Store()}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
