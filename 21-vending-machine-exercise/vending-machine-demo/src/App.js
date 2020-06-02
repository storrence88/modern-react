import React, { Component } from 'react';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Cookie from './Cookie';
import Soda from './Soda';
import Funyun from './Funyun';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/cookie' component={Cookie} />
          <Route exact path='/soda' component={Soda} />
          <Route exact path='/funyun' component={Funyun} />
        </Switch>
      </div>
    );
  }
}

export default App;
