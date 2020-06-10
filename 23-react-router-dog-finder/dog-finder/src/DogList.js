import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default class DogList extends Component {
  render() {
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center'>Dog List!</h1>
        <div className='row'>
          {this.props.dogs.map(dog => (
            <div className='Dog col-lg-4 text-center' key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                <h3>{dog.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
