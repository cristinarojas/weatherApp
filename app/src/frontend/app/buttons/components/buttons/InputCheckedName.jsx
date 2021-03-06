import React, { Component } from 'react';
import styles from './Buttons.scss';

class InputChecked extends Component {
  state = {
    userValue: '',
    userNum: '',
    check: false
  };

  handleOnChange = ({ target: { name, value, checked } = e }) => {
    this.setState({
      [name]: value,
      check: checked
    })
  }

  handleOnChangeok = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      check: e.target.checked
    });
  }

  render() {
    const { userValue , check, userNum } = this.state;

    return (
      <div className={styles.container}>
        <h1>Input and Checked using attr Name</h1>
        <input
          type="checkbox"
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="userValue"
          className={styles.user}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="userNum"
          onChange={this.handleOnChange}
        />
        <p
          className={`${check ? `${styles.letter}` : '' }`}
        >
          {userValue}
        </p>
        <p>
          {userNum}
        </p>
      </div>
    )
  }
}

export default InputChecked;
