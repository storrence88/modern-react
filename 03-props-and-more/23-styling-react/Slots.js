class Slots extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const styles = { fontSize: '50px', backgroundColor: 'purple' };
    let msg;
    if (s1 === s2 && s2 === s3) {
      msg = <p className='Machine-win'>Congratulations! You win!!!</p>;
    } else {
      msg = <p className='Machine-lose'>Sorry! You lost!</p>;
    }
    return (
      <div>
        <p style={styles}>
          {s1} {s2} {s3}
        </p>
        {msg}
      </div>
    );
  }
}
