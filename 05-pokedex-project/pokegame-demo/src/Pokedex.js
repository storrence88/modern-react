import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
        <Pokecard />
      </div>
    );
  }
}

export default Pokedex;
