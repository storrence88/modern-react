class Hello extends React.Component {
  render() {
    const props = this.props;
    let bangs = '!'.repeat(props.bangs);
    return (
      <div>
        <p>
          Hello, {props.to} from {props.from}
          {bangs}
        </p>
        <img src={props.img} />
      </div>
    );
  }
}
