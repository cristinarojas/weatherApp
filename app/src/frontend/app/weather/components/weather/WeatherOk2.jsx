// Dependencies
import React, { Component } from 'react';

class toDoList extends Component {
  state = {
    listValue: '',
    list: []
  };

  // listValue already have the value in the onChange
  handleAddTodo = () => {
    const { listValue, list } = this.state;

    this.setState({
      list: [...list, listValue],
      listValue: ''
    });
  }

  // to remove todo
  handleRemoveTodo = (index) => {
    const { list } = this.state;

    const todos = list.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })

    this.setState({
      list: todos
    });
  }


  render() {
    const { listValue , list } = this.state;

    return(
      <div>
        <input
          type="text"
          placeholder="Insert to do"
          onChange={ e => this.setState({ listValue: e.target.value }) }
          value={listValue}
        />

        <button
          type="button"
          onClick={this.handleAddTodo}
        >Add to do</button>

        <ul>
          {
            list.map((todo, index) => (
              <li key={index}>
                {todo}
                <span onClick={() => this.handleRemoveTodo(index)}> X </span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default toDoList;
