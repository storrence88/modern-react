import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const { pokemon, exp, isWinner } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className='Pokedex-winner'>Winning Hand</h1>;
    } else {
      title = <h1 className='Pokedex-loser'>Losing Hand</h1>;
    }
    return (
      <div className='Pokedex'>
        {title}
        <h4>Total EXP: {exp}</h4>
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
