import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Funyun extends Component {
  render() {
    return (
      <div>
        <h1>This is the Funyun component!</h1>
        <NavLink exact to='/'>
          Back
        </NavLink>
      </div>
    );
  }
}
