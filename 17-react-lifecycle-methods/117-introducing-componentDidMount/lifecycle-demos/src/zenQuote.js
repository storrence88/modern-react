import React, { Component } from 'react';
import './zenQuote.css';
import axios from 'axios';

class zenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: '', isLoaded: false };
  }

  componentDidMount() {
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

  render() {
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
