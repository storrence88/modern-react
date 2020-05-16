import React, { Component } from 'react';

class Box extends Component {
  render() {
    const { width, height, backgroundColor } = this.props;
    return (
      <div>
        <div
          style={{ width: `${width}px`, height: `${height}px`, backgroundColor: backgroundColor }}
        />
        <button onClick={this.props.removeBox}>Remove Box</button>
      </div>
    );
  }
}

export default Box;
