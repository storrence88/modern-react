import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';

const defaultTodos = [
  { id: 1, task: 'Beat the Oklahoma City Thunder', completed: false },
  { id: 2, task: 'Beat the Los Angeles Clippers', completed: false }
];

export const TodosContext = createContext();

export const TodosContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>
  );
};
