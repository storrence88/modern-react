import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';

export default class JokeList extends Component {
  static defaultProps = {
    numberOfJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    // Load jokes
    let jokes = [];
    while (jokes.length < this.props.numberOfJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }

  render() {
    return (
      <div className='JokeList'>
        <h1>Dad Jokes!</h1>
        <div className='JokeList-jokes'>{this.state.jokes.map(joke => <div>{joke}</div>)}</div>
      </div>
    );
  }
}
