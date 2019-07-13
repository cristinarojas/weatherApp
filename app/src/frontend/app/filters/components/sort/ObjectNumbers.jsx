// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

// Data
import votes from './stringsAndNumbers.js';

class ObjectNumbers extends Component {
  constructor() {
    super();
    this.state = {
      data: votes,
      orderedVotes: []
    }
  }

  handleSorted = () => {
    const { data } = this.state;
    console.log('data-->', data);

    const { data: { state }} = this.state;
    console.log('state-->', state);

    const { data: { people: { name, colony } }} = this.state;
    console.log('colony-->', colony);

    const { data: { candidates } } = this.state;

    const result = candidates.map((candidate) => {
      return candidate.votes;
    }).sort((a,b) => {
      return a - b;
    })

    this.setState({
      orderedVotes: result
    });
  }

  componentDidMount = () => {
    this.handleFetch();
  }

  handleFetch = () => {
    const url = 'https://cheerful-rock.glitch.me/';
    fetch(url)
      .then(response => response.json())
      .then(data => console.log('data fetch --->', data))
  }


  render() {
    const { orderedVotes } = this.state;

    return (
      <div className={styles.container}>
        <section className={styles.order}>
          <button
            type="button"
            onClick={this.handleSorted}
          >
            Order Votes numbers
          </button>
          <ul>
            {
              orderedVotes && orderedVotes.map((number, index) => (
                <li key={index}>{number}</li>
              ))
            }
          </ul>

          <button
           type="button"
           onClick={this.handleFetch}
           >Fetech</button>
        </section>
      </div>
    )
  }
}

export default ObjectNumbers;
