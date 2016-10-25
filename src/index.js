import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import './index.css';

//global variable for compat
window.ReactDOM = ReactDOM;
window.React = React;

ReactDOM.render(<Layout />,document.getElementById('root'));
