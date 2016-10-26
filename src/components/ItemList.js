import React, { Component } from 'react';
import { Button } from 're-bulma';

class ItemList extends Component {

  render() {
      return (
        <div>
        <Button color="isPrimary">Primary</Button>
        <Button color="isPrimary">Primary</Button>
        <Button color="isPrimary">Primary</Button>
        </div>
      )
  }
}

export default ItemList;
