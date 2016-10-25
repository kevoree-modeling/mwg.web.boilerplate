import React, { Component } from 'react';

const divStyle = {color: 'orange'};

class ItemList extends Component {

  render() {
      return (<span style={divStyle}>{this.props.label}</span>)
  }
}

export default ItemList;
