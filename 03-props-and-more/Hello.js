class Hello extends React.Component {
  render() {
    const props = this.props;
    return (
      <p>
        Hello, {props.to}! Love, {props.from}!
      </p>
    );
  }
}
