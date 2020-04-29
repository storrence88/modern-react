import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemon, exp, isWinner } = this.props;
    return (
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
        <p>Total EXP: {exp}</p>
        <p>{isWinner ? 'Winner' : 'Loser'}</p>
        <div className='Pokedex-cards'>
          {pokemon.map((poke) => (
            <Pokecard id={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
