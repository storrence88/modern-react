import React, { Component } from 'react';
import './zenQuote.css';
import axios from 'axios';

class zenQuote extends Component {
  constructor(props) {
    console.log('In constructor!');
    super(props);
    this.state = { quote: '', isLoaded: false };
  }

  componentDidMount() {
    console.log('In componentDidMount!');
    // Load data
    axios.get('https://api.github.com/zen').then(response => {
      setTimeout(
        function() {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
    // Set state with that data
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('In componentDidUpdate!');
  }

  render() {
    console.log('In render!');
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className='loader' />
        )}
      </div>
    );
  }
}

export default zenQuote;
