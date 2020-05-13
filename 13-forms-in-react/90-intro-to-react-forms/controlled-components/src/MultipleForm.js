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
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
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
