import React, { Component } from 'react';
import './Random.css';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    let randNum = Math.floor(Math.random() * 10) + 1;
    while (randNum === this.state.num) {
      randNum = Math.floor(Math.random() * 10) + 1;
    }
    if (randNum === 7) {
    }
    this.setState({ num: randNum });
  }
  render() {
    return (
      <div className='Random'>
        <h1>Number is {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>YOU WIN!!!</h2>
        ) : (
          <button onClick={this.handleClick}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Random;
