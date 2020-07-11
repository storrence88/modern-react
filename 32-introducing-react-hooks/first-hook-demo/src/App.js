import React from 'react';
import CounterHook from './CounterHook';
import './App.css';
import Toggler from './Toggler';

function App() {
  return (
    <div className='App'>
      <CounterHook />
      <Toggler />
    </div>
  );
}

export default App;
