import { Component } from 'react';
import '../App.css';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];

    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    // update state
    this.setState({ list: updatedList });
  }

  updateInput(key, value) {
    // update state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    // create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // create clone of current list of items
    const list = [...this.state.list];

    // add new item to List
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem: ''
    });
  }

  render() {
    return (
      <div classname='todo-app'>
        <div>
          Add an item ...
          <br />
          <input
            type='text'
            placeholder='Type item here...'
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ul>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
