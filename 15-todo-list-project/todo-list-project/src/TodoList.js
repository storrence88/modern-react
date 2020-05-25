import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('In componentDidUpdate!');
    console.log(prevState.todos);
    console.log(this.state.todos);
  }

  addTodo = todo => {
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div className='TodoList'>
        <h1>
          Todo List! <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
