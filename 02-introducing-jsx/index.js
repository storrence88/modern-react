class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My React Image</h1>
        <img src='https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.querySelector('#root'));
