import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Plotly from 'plotly.js/dist/plotly-basic.js';

class Chart extends Component {

  componentDidMount() {

    var container = this.props.glContainer;

    var selfRootNode = ReactDOM.findDOMNode(this);
    var data2 = [{
      x: [1999, 2000, 2001, 2002],
      y: [10, 9, 8, 7],
      type: 'scatter'
    }];
    var layout2 = {
      title: 'Revenue',
      autosize: true,
      width: container.width,
      height: container.height
    };
    Plotly.newPlot(selfRootNode, data2, layout2);
    container.on('resize',function(){
      layout2.width = container.width;
      layout2.height = container.height;
      Plotly.newPlot(selfRootNode, data2, layout2);
		});
  }

  render() {
      return (<div></div>)
  }
}

export default Chart;
