class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='Steven' from='Meredith' />
        <Hello to='Tiff' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
