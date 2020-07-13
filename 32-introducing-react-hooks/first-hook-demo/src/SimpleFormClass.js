import React, { Component } from 'react';

class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>You entered: {this.state.email}</h1>
        <input type='text' value={this.state.email} onChange={this.handleChange} />
      </div>
    );
  }
}

export default SimpleFormClass;
