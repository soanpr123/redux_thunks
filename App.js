/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import People from './src/container/People';
const App = (props) => {
  return (
    <Provider store={store}>
      <People />
    </Provider>
  );
};

export default App;
