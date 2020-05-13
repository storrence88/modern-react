import React, { Component } from 'react';

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '' };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`You typed: ${this.state.username}`);
    this.setState({ username: '' });
  };
  render() {
    return (
      <div>
        <h1>Form Demo!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;
