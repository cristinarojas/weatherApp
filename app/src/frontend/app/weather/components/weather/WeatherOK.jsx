// Dependencies
import React, { Component } from 'react';

class toDoList extends Component {
  state = {
    valueTodo: '',
    list: []
  };

  handleAddTodo = () => {
    const { valueTodo, list } = this.state;

    this.setState({
      list: [...list, valueTodo],
      valueTodo: ''
    });
  }

  handleRemoveTodo = (index) => {
    const { list } = this.state;

    const todos = list.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });

    this.setState({
      list: todos
    });
  }

  render() {
    const { valueTodo, list } = this.state;

    return(
      <div>
        <input
          type="text"
          placeholder="Insert to do"
          value={valueTodo}
          onChange={e => this.setState({ valueTodo: e.target.value }) }
        />

        <button
          type="submit"
          onClick={this.handleAddTodo}>Add to do</button>

        <ul>
          {list.map((todo, index) => (
            <li key={index}>
              {todo}
              <span onClick={() => this.handleRemoveTodo(index)}> X </span>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default toDoList;
