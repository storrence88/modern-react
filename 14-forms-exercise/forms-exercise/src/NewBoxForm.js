import React, { Component } from 'react';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: '', height: '', backgroundColor: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='width'>Width: </label>
          <input
            id='width'
            name='width'
            type='text'
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor='height'>Height: </label>
          <input
            id='height'
            name='height'
            type='text'
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor='background-color'>Background Color: </label>
          <input
            id='background-color'
            name='backgroundColor'
            type='text'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Create Square!</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
