import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({ todos }) {
  console.log(todos);
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <Fragment>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
