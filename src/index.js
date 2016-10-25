import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

//global variable for compat
window.ReactDOM = ReactDOM;
window.React = React;

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
  <Layout />
  </Provider>,
  document.getElementById('root')
);
