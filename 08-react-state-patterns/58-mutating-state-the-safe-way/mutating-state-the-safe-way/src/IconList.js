import React, { Component } from 'react';

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'anchor',
      'archive',
      'at',
      'archway',
      'baby',
      'bell',
      'bolt',
      'bone',
      'car',
      'city',
      'cloud',
      'couch'
    ]
  };
  constructor(props) {
    super(props);
    this.state = { icons: [] };
    this.addIcon = this.addIcon.bind(this);
  }
  // addIcon() {
  //   let randomIndex = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[randomIndex];
  //   let icons = this.state.icons;
  //   icons.push(newIcon);
  //   this.setState((icons: icons));
  // }

  addIcon() {
    let randomIndex = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[randomIndex];
    this.setState((currState) => ({ icons: [...currState.icons, newIcon] }));
  }
  render() {
    const icons = this.state.icons.map((i) => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}
export default IconList;
