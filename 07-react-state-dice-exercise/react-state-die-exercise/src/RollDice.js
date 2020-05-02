import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face='three' />
          <Die face={'five'} />
        </div>
        <button>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
