import React from 'react';
import ReactDOM from 'react-dom';
import fruits from './foods';
import { choice, remove } from './helpers';

class App extends React.Component {
  render() {
    const randomFruit = choice(fruits);
    remove(fruits, randomFruit);
    return (
      <div>
        <p>Randomly drawn fruit: {randomFruit}</p>
        <p>I'd like one {randomFruit}, please!</p>
        <p>Here you go! {randomFruit}</p>
        <p>Delicious! May I have another?</p>
        <p>I'm sorry! We're all out. We have {fruits.length} left.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
