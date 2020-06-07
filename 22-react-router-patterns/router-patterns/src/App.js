import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          {/*
          This is very bad practice. We would have to hardcode
           all of the routes for all of the foods that have ever
          existed. 

          Instead, there's a better way! We can use route params!
        */}
          {/* <Route path='/food/kale' render={() => <Food name='kale' />} />
        <Route path='/food/chicken' render={() => <Food name='chicken' />} />
        <Route path='/food/pasta' render={() => <Food name='pasta' />} /> */}

          <Route
            exact
            path='/food/:name'
            // We can use routeProps (or whatever name we choose to give it) to
            // access the data that holds the params name and pass that into
            // the Food component as the value for the name prop
            render={routeProps => <Food name={routeProps.match.params.name} />}
          />

          {/* 
          We can also use the component attribute instead of render and it 
          provides a shorthand to make things a little bit easier

          The only downside to using component is that we cannot pass down
          any additional props to the Food component

          We also have to handle extracting the information differently in
          the Food component
        */}

          {/* <Route exact path='/food/:name' component={Food} /> */}

          {/* 
          We can also handle multiple route params
        */}
          <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />

          {/* 
            For the 404 route, we'll need to include the Switch component
            This ensures that only 1 route is ever returned

            Also the order of the Routes matter when using Switch
            We want to place the 404 route at the bottom of our Routes
          */}
          <Route exact path='/' render={() => <h1>Homepage!</h1>} />
          <Route render={() => <h1>404 - Page Not Found!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
