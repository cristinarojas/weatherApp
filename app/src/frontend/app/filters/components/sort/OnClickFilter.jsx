// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Filters.scss';

// Data
const names = ['cristina', 'Efrain', 'Nayeli', 'Gonzalo', 'karolina'];

class OnClickFilter extends Component  {
  state = {
    userValue: '',
    results: []
  }

  handleOnchange = ({ target: {name, value} = e }) => {
    this.setState({
      [name]: value
    });
  }

  handleSearch = () => {
    const { userValue, results } = this.state;

    const filteredResults = names.filter((name, nameIndex) => { // will go through each and will apply the indexOf
      if (name.toString().toLowerCase().indexOf(userValue) !== -1) {
        return name;
      }
    });

    // will save all the names that pass in local state
    this.setState({
      results: filteredResults
    });
  }

  render() {
    const { userValue, results } = this.state;
    let data;

    if (results.length > 0) {
      data = results
    } else {
      data = names
    }

    return(
      <div className={styles.container}>
        <h1>OnCkick Filter</h1>

        <input
          type="text"
          name="userValue"
          value={userValue}
          onChange={this.handleOnchange}
        />

        <input
          type="button"
          value="search"
          onClick={this.handleSearch}
        />

        <ul>
          {
            data ?
            data.map((name, index) => (
              <li key={index}>{name}</li>
            )) : ''
          }
        </ul>
      </div>
    )
  }
}

export default OnClickFilter;
