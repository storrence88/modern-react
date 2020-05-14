import React, { Component } from 'react';
import MultipleForm from './MultipleForm';
import Form from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Form />
        <MultipleForm />
      </div>
    );
  }
}

export default App;
