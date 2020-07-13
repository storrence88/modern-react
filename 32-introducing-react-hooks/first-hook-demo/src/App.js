import React from 'react';
import CounterHook from './CounterHook';
import './App.css';
import Toggler from './Toggler';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import Clicker from './Clicker';

function App() {
  return (
    <div className='App'>
      {/* <CounterHook />
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks /> */}
      <Clicker />
    </div>
  );
}

export default App;
