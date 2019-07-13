// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

// Data
import dataNumbers from './dataNumbers.js';

class SortNumbers extends Component {
  constructor() {
    super();
    this.state = {
      numbers: dataNumbers,
      sorted: false
    }
  }

  handleSorted = () => {
    const { numbers } = this.state;
    let ordered = [];

    if (!this.state.sorted) {
      ordered = numbers.sort((a,b) => {
        return b - a
      }).map(Number);
    } else {
      ordered = numbers.sort((a,b) => {
        return a - b
      }).map(Number);
    }

    this.setState({
      numbers: ordered,
      sorted: !this.state.sorted
    })
  }
  render() {
    const { numbers } = this.state;
    const numbersArray = numbers.length > 0 ? numbers : dataNumbers;

    return (
      <div className={styles.container}>
        <section className={styles.order}>
          <button
            type="button"
            onClick={this.handleSorted}
          >
            Order numbers
          </button>

          <ul>
            {
              numbersArray && numbersArray.map((number, index) => (
                <li key={index}>{number}</li>
              ))
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default SortNumbers;
