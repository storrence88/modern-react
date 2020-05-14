import React, { Component } from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', quantity: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' value={this.state.name} onChange={this.handleChange} />

        <label htmlFor='quantity'>Quantity: </label>
        <input
          id='quantity'
          name='quantity'
          value={this.state.quantity}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default ShoppingListForm;
