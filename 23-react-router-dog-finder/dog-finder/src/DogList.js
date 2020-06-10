import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  handleClick = name => {
    this.props.history.push(`/dogs/${name.toLowerCase()}`);
  };

  render() {
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center mt-3 mb-5'>Dog List!</h1>
        <div className='row'>
          {this.props.dogs.map(dog => (
            <div className='Dog col-lg-4 text-center' key={dog.name}>
              <img src={dog.src} alt={dog.name} onClick={() => this.handleClick(dog.name)} />
              <h3 className='mt-3'>
                <Link to={`/dogs/${dog.name.toLowerCase()}`} className='underline'>
                  {dog.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(DogList);
