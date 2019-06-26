// Dependencies
import React, { Component } from 'react';

// ref element
let textInput = React.createRef();

class submitText extends Component  {
  state = {
    userValue: '',
    list: []
  };

  // Obtaining the input value
  handleOnChange = (e) => {
    const { userValue } = this.state;
    const value = e.target.value;

    this.setState({
      userValue: value
    })
  }

  // To insert to do at the array
  handleTodo = () => {
    const { userValue, list } = this.state;

    this.setState({
      list: [...list, userValue],
      userValue: ''
    });
  }

  // To delete todo
  handleDelete = (index) => {
    const { list } = this.state;
    let results;

    results = list.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });

    this.setState({
      list: results
    });
  }

  render() {
    const { userValue, list } = this.state;

    return(
      <div>
        <input
          type="text"
          placeholder="Insert to do..."
          value={userValue}
          onChange={this.handleOnChange}
        />
        <button
          type="submit"
          onClick={this.handleTodo}
        >Add to do</button>

        <p>To do list</p>
        <ul>
          {
            list.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  type="button"
                  onClick={() => this.handleDelete(index)}
                >X</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default submitText;
