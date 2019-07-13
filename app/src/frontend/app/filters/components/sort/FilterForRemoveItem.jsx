// styles
import styles from './Filters.scss';

// Dependencies
import React, { Component } from 'react';

// Data
import names from './data';

class FilterForRemoveItem extends Component {
  constructor(props) {
    super();
    this.state = {
      names: names
    };
  }


  removeItem = (index) => {
    const { names } = this.state;

    const result = names.filter((name, nameIndex) => {
      if (nameIndex !== index) {
        return name;
      }
    })

    this.setState({
      names: result
    });
  }
  render(){
    const { names } = this.state;
    console.log('names...', names);

    return (
      <div className={styles.container}>
        <h1>Filter for remove item of the list</h1>
        <ul>
          {
            names.length > 0 ?
            (names.map((name, index) => (
              <li key={index}>
                {name} <span onClick={() => this.removeItem(index)}>X</span>
              </li>
            ))) : ''
          }
        </ul>
      </div>
    )
  }
}

export default FilterForRemoveItem;
