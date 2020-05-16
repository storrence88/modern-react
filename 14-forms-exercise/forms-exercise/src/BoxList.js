import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
  }
  addBox = box => {
    let newBox = { ...box, id: uuidv4() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));
  };
  removeBox = id => {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  };
  renderBoxes = () => {
    return (
      <div>
        {this.state.boxes.map(box => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={() => this.removeBox(box.id)}
          />
        ))}
      </div>
    );
  };
  render() {
    return (
      <div>
        <h1>Color Box Maker App</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
