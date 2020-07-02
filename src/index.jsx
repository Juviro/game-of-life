import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(reducers, middlewares);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
