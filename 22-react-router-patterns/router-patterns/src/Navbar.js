import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  handleLogin = () => {
    alert('User logged in!');
    this.props.history.push('/food/salmon');
  };

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className='Navbar'>
        <button onClick={this.handleBack}>Go Back</button>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
