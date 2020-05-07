import React, { Component } from 'react';
import { choice } from './helpers';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: choice() };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let newColor;

    do {
      newColor = choice();
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  render() {
    return (
      <div
        className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
