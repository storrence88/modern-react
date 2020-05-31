import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import './App.css';

const Lover = () => <h1>I love all dogs!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/dog/lover' component={Lover} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
