class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name='Elton' hobbies={['Piano', 'Singing', 'Dancing']} />
        <Friend name='Mozart' hobbies={['Piano', 'Showing off', 'Composing']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
