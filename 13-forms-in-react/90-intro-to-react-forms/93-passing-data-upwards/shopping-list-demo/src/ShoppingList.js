import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ name: 'Milk', quantity: '2 gallons' }, { name: 'Break', quantity: '2 loaves' }]
    };
  }

  addItem = item => {
    this.setState(state => ({
      items: [...state.items, item]
    }));
  };

  renderItems = () => {
    return (
      <ul>
        {this.state.items.map(item => (
          <li>
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
