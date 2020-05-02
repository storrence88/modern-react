import React, { Component } from 'react';

class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }
  singleKill() {
    // Not a good idea to update state like this
    // Especially if it relies on existing state values
    this.setState({ score: this.state.score + 1 });
  }
  // tripleKill() {
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  //   this.setState({ score: this.state.score + 1 });
  // }

  // Using the setState callback
  // tripleKill() {
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  //   this.setState((st) => {
  //     return { score: st.score + 1 };
  //   });
  // }

  // Use the setState callback but refactoring by putting logic
  // in a seperate function
  incrementScore(currState) {
    return { score: currState.score + 1 };
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
  }
  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}

export default ScoreKeeper;
