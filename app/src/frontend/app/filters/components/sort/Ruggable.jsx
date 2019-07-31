// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

class Ruggable extends Component {
  state = {
    userValue: '',
    data: []
  }

  handleOnchange = (e) => {
    const  userValue = e.target.value;

    this.setState({
      userValue
    })
  }

  handleSearch = () => {
    fetchinData(this.state.userValue);
  }

  componentDidMount = ()  => {

    /*fetchinData = (userInput) => {
      const url = 'google.com?query=[userInput]';

      fetch(url)
        .then(response => response.json())
        .then(err => err.)

      this.setState({
        data: response
      })
    }*/

  }

  render() {
    const { userValue, data } = this.state;

    return (
      <div className={styles.allContainer}>
        <h1>Search Rugs</h1>

        <input
          type="text"
          onChange={this.handleOnchange}
          placeholder="type name of rug..."
        />
        <button
          type="submit"
          onClick={this.handleSearch}
        >Search</button>

        <ul>
          {
            data.length > 0 && data.map((rug, i) => (
              <li key={i}>{rug}</li>
            ))
          }
        </ul>

      </div>
    )
  }
}

export default Ruggable;
