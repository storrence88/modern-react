class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='Steven' from='Meredith' />
        <Hello to='Tiff' from='Jose' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
