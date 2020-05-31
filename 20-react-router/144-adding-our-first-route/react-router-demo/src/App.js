// ====================================================
// IF YOU ARE LOOKING FOR THE 'fake' ROUTING EXAMPLE...
// I MOVED THE CODE INTO FakeRouting.js
// ====================================================
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <Link to='/'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/dog'>Dog</Link>
          <a href='/'>About</a>
          <a href='/contact'>Contact</a>
          <a href='dog'>Dog</a>
        </nav>

        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dog' component={Dog} />
          <Route exact path='/dog/hater' component={Hater} />
        </Switch>
      </div>
    );
  }
}

export default App;
