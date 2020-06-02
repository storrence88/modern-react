import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cookie extends Component {
  render() {
    return (
      <div>
        <h1>This is the Cookie component!</h1>
        <NavLink exact to='/'>
          Back
        </NavLink>
      </div>
    );
  }
}
