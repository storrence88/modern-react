class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to='Steven'
          from='Meredith'
          bangs={4}
          img='https://images.unsplash.com/photo-1519580725982-896839e8a16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
