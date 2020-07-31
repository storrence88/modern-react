import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function EditTodoForm({ id, task, updateTodo, toggle }) {
  const [editText, setEditText, reset] = useInputState(task);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateTodo(id, editText);
        reset();
        toggle();
      }}
      style={{
        marginLeft: '1rem',
        width: '750%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <TextField
        type='text'
        value={editText}
        onChange={setEditText}
        placeholder={task}
        margin='normal'
        fullWidth
        autoFocus
      />
      <Button variant='contained' color='secondary' style={{ marginLeft: '1rem' }} onClick={toggle}>
        Cancel
      </Button>
    </form>
  );
}

export default EditTodoForm;
