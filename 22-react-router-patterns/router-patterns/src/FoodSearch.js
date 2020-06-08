import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleClick = () => {
    // Save to DB
    alert('Save food to DB!');

    // Call redirect
    this.props.history.push(`/food/${this.state.query}`);
  };

  render() {
    return (
      <div>
        <h1>Search for a Food!</h1>
        <input
          type='text'
          placeholder='Search for a food'
          value={this.state.query}
          onChange={this.handleChange}
        />
        <Link to={`/food/${this.state.query}`}>Go!</Link>
        <button onClick={this.handleClick}>Save Food</button>
      </div>
    );
  }
}
