import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    function padToThree(number) {
      if (number <= 999) {
        number = ('00' + number).slice(-3);
      }
      return number;
    }
    const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <img src={imgSrc} alt={name} className='Pokecard-img' />
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
