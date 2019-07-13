// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

// Data
import rugsData from './dataStrings.js';

class Study2 extends Component {
  constructor() {
    super();
    this.state = {
      rugs: this.orderedRugs(rugsData)
    }
  }

  orderedRugs = (rugsData) => {
    const orderedRugs = rugsData.sort((a,b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();

      return a > b ? 1 : b > a ? -1 : 0;
    })

    return orderedRugs;
  }

  handleOnChange = (e) => {
    const value = e.target.value;
    const sortedRugs = this.orderedRugs(this.state.rugs);

    if(value === "z-a") {
      sortedRugs.reverse();
    }

    this.setState({
      rugs: sortedRugs
    })
  }

  render() {
    const { rugs } = this.state;

    return (
      <div className={styles.container}>
        <section className={styles.order}>
          <span>Sort By</span>

          <select onChange={this.handleOnChange} >
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>

          <ul>
            {
              rugs && rugs.map((rug, i) => {
                return (
                  <li key={i}>{rug}</li>
                )
              })
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default Study2;
