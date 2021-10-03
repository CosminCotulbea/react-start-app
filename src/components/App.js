import React from 'react';
import {Provider} from 'react-redux';
import Router from '../router';
import store from '../state/store';
import '../resources/styles/index.scss';

function App() {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
}

export default App;
