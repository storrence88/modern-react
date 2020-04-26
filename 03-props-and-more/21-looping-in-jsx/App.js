class App extends React.Component {
  render() {
    return (
      <div>
        <Messages />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
