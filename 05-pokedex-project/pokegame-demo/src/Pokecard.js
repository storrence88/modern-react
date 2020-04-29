import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}${id}.png`;
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
