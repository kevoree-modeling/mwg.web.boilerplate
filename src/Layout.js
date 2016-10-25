import React, { Component } from 'react';

import './Layout.css';
import GoldenLayout from 'golden-layout';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';

import ItemList from './ItemList';
import Chart from './Chart';

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
                    component: 'Chart',
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
    myLayout.registerComponent( 'Chart', Chart);
    myLayout.init();
  };
  render(){
    return (<div id="layout"/>)
  };
}

export default Layout;
