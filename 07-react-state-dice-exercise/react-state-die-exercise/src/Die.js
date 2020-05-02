import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    const { face } = this.props;
    return <i className={` Die fas fa-dice-${face}`} />;
  }
}

export default Die;
