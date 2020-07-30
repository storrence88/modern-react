import React, { Fragment } from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo, updateTodo }) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <div>
      <ListItem key={id}>
        {isEditing ? (
          <EditTodoForm id={id} task={task} updateTodo={updateTodo} toggle={toggle} />
        ) : (
          <Fragment>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
            <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </Fragment>
        )}
      </ListItem>
    </div>
  );
}

export default Todo;
