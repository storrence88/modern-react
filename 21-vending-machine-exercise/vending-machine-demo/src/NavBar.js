import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <NavLink exact activeClassName='active-link' to='/cookie'>
          Cookie
        </NavLink>
        <NavLink exact activeClassName='active-link' to='/soda'>
          Soda
        </NavLink>
        <NavLink exact activeClassName='active-link' to='/funyun'>
          Funyuns
        </NavLink>
      </div>
    );
  }
}
