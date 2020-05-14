import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Milk', quantity: '2 gallons', id: uuidv4() },
        { name: 'Break', quantity: '2 loaves', id: uuidv4() }
      ]
    };
  }

  addItem = item => {
    let newItem = { ...item, id: uuidv4() };
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  };

  renderItems = () => {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
