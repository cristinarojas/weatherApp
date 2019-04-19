import React, { Component, Fragment } from 'react';

class Todo extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.name === 'submit') {
      console.log('entra', e.target.name );
    }
  }


  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="input" name="todo" id="todo" />
          <input type="submit" name="submit" id="submit" />
        </form>
      </>
    );
  }
}

export default Todo;
