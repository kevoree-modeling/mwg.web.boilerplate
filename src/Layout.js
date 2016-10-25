import React, { Component } from 'react';

import './Layout.css';
import GoldenLayout from 'golden-layout';

require('golden-layout/src/css/goldenlayout-base.css');
require('golden-layout/src/css/goldenlayout-dark-theme.css');

import ItemList from './ItemList';

class Layout extends Component {

  componentDidMount() {
    //var $this = $(ReactDOM.findDOMNode(this));
    var myLayout = new GoldenLayout({
        content: [{
            type: 'row',
            content:[{
                type:'react-component',
                component: 'ItemList',
                props: { label: 'A' }
            },{
                type: 'column',
                content:[{
                    type:'react-component',
                    component: 'ItemList',
                    props: { label: 'B' }
                },{
                    type:'react-component',
                    component: 'ItemList',
                    props: { label: 'C' }
                }]
            }]
        }]
    });
    myLayout.registerComponent( 'ItemList', ItemList);
    myLayout.init();
  };
  render(){
    return (<div id="layout"/>)
  };
}

export default Layout;
