import React, { Component } from 'react';
import Timer from './Timer';
import ZenQuote from './zenQuote';
import GithubUserInfo from './GithubUserInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ZenQuote />
        {/* <GithubUserInfo username='facebook' />
        <GithubUserInfo username='storrence88' />
        <GithubUserInfo username='gaearon' />
        <GithubUserInfo username='sophiebits' /> */}
      </div>
    );
  }
}

export default App;
