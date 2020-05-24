import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numberToWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 6
  };
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    const { numberToWords, locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberToWords[val - 1]} fa-5x `;
    if (locked) classes += 'Die-locked';
    if (rolling) classes += 'Die-rolling';
    return <i className={classes} onClick={this.handleClick} disabled={disabled} />;
  }
}

export default Die;
