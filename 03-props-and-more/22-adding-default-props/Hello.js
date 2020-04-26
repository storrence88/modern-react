class Hello extends React.Component {
  // This is how we add default props in a component
  static defaultProps = {
    from: 'Jose'
  };
  render() {
    const { to, from } = this.props;
    return (
      <p>
        Hi {to} from {from}!
      </p>
    );
  }
}
