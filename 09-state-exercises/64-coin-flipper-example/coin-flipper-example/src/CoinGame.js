import React, { Component } from 'react';
import Coin from './Coin';
import './CoinGame.css';

class CoinGame extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      flips: 0,
      heads: 0,
      tails: 0,
      currCoin: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const randomIndex = Math.floor(Math.random() * this.props.coins.length);
    const coin = this.props.coins[randomIndex];
    this.setState((currentState) => {
      return {
        currCoin: coin,
        flips: currentState.flips + 1,
        heads: currentState.heads + (coin.side === 'heads' ? 1 : 0),
        tails: currentState.tails + (coin.side === 'tails' ? 1 : 0)
      };
    });
  }
  render() {
    return (
      <div className='CoinGame'>
        <h1>Let's Flip a Coin!</h1>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.flips} flips, there have been {this.state.heads} heads and{' '}
          {this.state.tails} tails
        </p>
      </div>
    );
  }
}

export default CoinGame;
