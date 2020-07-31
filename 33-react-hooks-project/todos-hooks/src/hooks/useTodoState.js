import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    },
    updateTodo: (todoId, todoText) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, task: todoText };
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };
};
