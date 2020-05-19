import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
  }

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = event => {
    console.log('In handleUpdate!');
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input type='text' name='task' value={this.state.task} onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='Todo'>
          <li
            className={this.props.completed ? 'Todo-task completed' : 'Todo-task'}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              <i className='fas fa-pen' />
            </button>
            <button onClick={this.handleRemove}>
              <i className='fas fa-trash' />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
