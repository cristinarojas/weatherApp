// Dependencies
import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    userValue: '',
    text: ''
  };

  handleOnChange = (e) => {
    this.setState({
      userValue: e.target.value
    });
  }

  handleClick = () => {
    this.setState({
      text: this.state.userValue
    })
  }

  render() {
    const { userValue, text} = this.state;

    console.log('userValue--->', userValue)
    console.log('text--->', text)

    return (
      <div>
        <input
          type="text"
          placeholder="Inter name"
          value={userValue}
          onChange={this.handleOnChange}
        />

        <p>{text}</p>

        <input
          type="submit"
          placeholder="submit"
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default UserInput;
