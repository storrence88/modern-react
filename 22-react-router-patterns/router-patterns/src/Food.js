import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Food.css';

export default class Food extends Component {
  render() {
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`;
    return (
      <div className='Food'>
        {/\d/.test(this.props.name) ? (
          <Redirect to='/' />
        ) : (
          <div>
            <h1>I love to eat {this.props.name}</h1>
            <img src={url} alt={this.props.name} />
          </div>
        )}
      </div>
    );
  }
}
