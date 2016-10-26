import React, { Component } from 'react';

import './View0.css';
import GoldenLayout from 'golden-layout';

import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';

import ItemList from '../components/ItemList';
import Chart from '../components/Chart';

class Layout extends Component {

  componentDidMount() {
    //var $this = $(ReactDOM.findDOMNode(this));
    var myLayout = new GoldenLayout({
        settings:{
          hasHeaders: true,
          constrainDragToContainer: true,
          reorderEnabled: true,
          selectionEnabled: false,
          popoutWholeStack: false,
          blockedPopoutsThrowError: true,
          closePopoutsOnUnload: true,
          showPopoutIcon: false,
          showMaximiseIcon: true,
          showCloseIcon: false
        },
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
