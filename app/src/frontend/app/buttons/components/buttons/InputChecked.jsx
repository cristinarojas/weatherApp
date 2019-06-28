import React, { Component } from 'react';
import styles from './Buttons.scss';

class InputChecked extends Component {
  state = {
    userValue: '',
    check: false
  };

  handleOnChange = (e) => {
    this.setState({
      userValue: e.target.value
    });
  }

  handleChecked = (e) => {
    this.setState({
      check: e.target.checked
    });
  }

  render() {
    const { userValue , check } = this.state;
    console.log('check-->', check)

    return (
      <div className={styles.container}>
        <h1>Input and Checked</h1>
        <input
          type="checkbox"
          onChange={this.handleChecked}
        />
        <input
          type="text"
          className={styles.user}
          onChange={this.handleOnChange}
        />
        <p
          className={`${check ? `${styles.letter}` : '' }`}
        >
          {userValue}
        </p>
      </div>
    )
  }
}

export default InputChecked;
