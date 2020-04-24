function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
        <h1>My number is: {2 * 8.4}</h1>
        <h1>My React Image</h1>
        <img src='https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.querySelector('#root'));
