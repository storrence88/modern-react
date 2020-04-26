class App extends React.Component {
  render() {
    return (
      <div className='Machine'>
        <h1>Slot Machines!</h1>
        <Slots s1='🍎' s2='🍊' s3='🍇' />
        <Slots s1='🍎' s2='🍊' s3='🍊' />
        <Slots s1='🍇' s2='🍇' s3='🍇' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
