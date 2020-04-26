class Messages extends React.Component {
  render() {
    const msgs = [{ id: 1, text: 'Hello!' }, { id: 2, text: 'Goodbye!' }];
    return <ul>{msgs.map((m) => <li>{m.text}</li>)}</ul>;
  }
}
