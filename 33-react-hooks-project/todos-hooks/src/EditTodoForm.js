import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

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
    >
      <TextField
        type='text'
        value={editText}
        onChange={setEditText}
        placeholder={task}
        margin='normal'
        fullWidth
      />
    </form>
  );
}

export default EditTodoForm;
