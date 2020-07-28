import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useImportState from './hooks/useInputState';

function TodoForm({ addTodo }) {
  const [title, setTitle, reset] = useImportState('');

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(title);
          reset();
        }}
      >
        <TextField
          value={title}
          onChange={setTitle}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
