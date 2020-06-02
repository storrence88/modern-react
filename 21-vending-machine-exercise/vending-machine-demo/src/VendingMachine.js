import React, { Component } from 'react';
import Message from './Message';
import { NavLink } from 'react-router-dom';

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <Message>
          <h1>This is the VendingMachine component!</h1>
        </Message>
        <Message>
          <NavLink exact to='/cookie'>
            Cookie
          </NavLink>
          <NavLink exact to='/soda'>
            Soda
          </NavLink>
          <NavLink exact to='/funyun'>
            Funyuns
          </NavLink>
        </Message>
      </div>
    );
  }
}
