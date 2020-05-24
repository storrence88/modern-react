import React, { Component } from 'react';
import Timer from './Timer';
import ZenQuote from './zenQuote';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ZenQuote />
      </div>
    );
  }
}

export default App;
