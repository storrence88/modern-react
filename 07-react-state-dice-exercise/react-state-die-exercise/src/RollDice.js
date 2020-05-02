import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'three', die2: 'five' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const { sides } = this.props;
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    this.setState({ die1: newDie1, die2: newDie2 });
  }
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.handleClick}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
