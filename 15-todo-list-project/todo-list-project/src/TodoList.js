import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodo = todo => {
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo key={todo.id} id={todo.id} task={todo.task} removeTodo={this.removeTodo} />
    ));
    return (
      <div>
        <h1>This is a TodoList component</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
