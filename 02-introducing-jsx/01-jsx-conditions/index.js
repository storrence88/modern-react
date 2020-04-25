function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

// class NumPicker extends React.Component {
//   render() {
//     const num = getNum();
//     return (
//       <div>
//         <h1>Your number is...{num}</h1>
//         <p>{num === 7 ? 'Congrats!' : "I'm sorry. Try again!"}</p>
//       </div>
//     );
//   }
// }

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>Congratulations, you win!</h2>
          <img src='https://media.giphy.com/media/5oGIdt1xapQ76/giphy.gif' />
        </div>
      );
    } else {
      msg = <p>Sorry! Please try again...</p>;
    }
    return (
      <div>
        <h1>Your number is...{num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.querySelector('#root'));
