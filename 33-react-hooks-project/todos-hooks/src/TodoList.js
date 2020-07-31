import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Fragment key={todo.id}>
            <Todo
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
