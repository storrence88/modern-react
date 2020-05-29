import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css';

export default class JokeList extends Component {
  static defaultProps = {
    numberOfJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]') };
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  getJokes = async () => {
    let jokes = [];
    while (jokes.length < this.props.numberOfJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      jokes.push({ id: res.data.id, text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes: jokes });
    window.localStorage.setItem('jokes', JSON.stringify(jokes));
  };

  handleVote = (id, delta) => {
    this.setState(prevState => ({
      jokes: prevState.jokes.map(
        joke => (joke.id === id ? { ...joke, votes: joke.votes + delta } : joke)
      )
    }));
  };

  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes!
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button className='JokeList-getmore'>New Jokes</button>
        </div>
        <div className='JokeList-jokes'>
          {this.state.jokes.map(joke => (
            <Joke
              key={joke.id}
              id={joke.id}
              votes={joke.votes}
              text={joke.text}
              upvote={() => this.handleVote(joke.id, 1)}
              downvote={() => this.handleVote(joke.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
