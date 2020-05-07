import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ['purple', 'magenta', 'violet', 'pink']
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className='ColorBoxes'>{boxes}</div>;
  }
}

export default ColorBoxes;
