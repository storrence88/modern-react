import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    // this.setState((currState) => ({
    //   nums: currState.nums.map((n) => Math.floor(Math.random() * this.props.maxNum) + 1)
    // }));

    // To ensure no duplicate LottoBalls
    const rndNumbers = [];
    while (rndNumbers.length < this.props.maxBalls) {
      let rndNumber = Math.floor(Math.random() * this.props.maxNum + 1);
      !rndNumbers.includes(rndNumber) && rndNumbers.push(rndNumber);
    }
    this.setState({ nums: rndNumbers });
  }
  handleClick() {
    this.generate();
  }
  render() {
    return (
      <section className='Lottery'>
        <h1>{this.props.title}</h1>
        <div>{this.state.nums.map((n) => <LottoBall num={n} />)}</div>
        <button onClick={this.handleClick}>Generate!</button>
      </section>
    );
  }
}
export default Lottery;
