import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'

import reducers from './reducers'

import PageView0 from './pages/View0';
import PageView1 from './pages/View1';
import PageAbout from './pages/About';

//global variable for compat
window.ReactDOM = ReactDOM;
window.React = React;

let store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/view0" component={PageView0}/>
        <Route path="/view1" component={PageView1}/>
        <Route path="/about" component={PageAbout}/>
        <Route path="*" component={PageView0}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
