class Slots extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    let msg;
    if (s1 === s2 && s2 === s3) {
      msg = <p>Congratulations! You win!!!</p>;
    } else {
      msg = <p>Sorry! You lost!</p>;
    }
    return (
      <div>
        <p>
          {s1} {s2} {s3}
        </p>
        {msg}
      </div>
    );
  }
}
