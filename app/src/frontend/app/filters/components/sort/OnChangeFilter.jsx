// styles
import styles from './Filters.scss';

// Dependencies
import React, { Component } from 'react';

// Data
import names from './data';

class OnChangeFilter extends Component {
  state = {
    userValue: '',
    results: []
  }

  handleOnchange = ({target: {name, value} = e }) => {

    const result = names.filter((name, indexName) => {
      if (name.toString().toLowerCase().indexOf(value) !== -1) {
        return name
      }
    })

    this.setState({
      results: result,
      userValue: ''
    });
  }

  render(){
    const { results } = this.state;
    let data;

    if (results.length > 0) {
      data = results;
    } else {
      data = names;
    }

    return (
      <div className={styles.container}>
        <h1>OnChange Filter</h1>
        <input
          type="text"
          name="userValue"
          onChange={this.handleOnchange}
        />

        <ul>
        {
          data ?
          (data.map((result, indexResult) => (
            <li key={indexResult}>{result}</li>
          ))) : ''
        }
        </ul>
      </div>
    )
  }
}

export default OnChangeFilter;
