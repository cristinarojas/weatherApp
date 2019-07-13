// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

// Data
import data from './filterData.js';

class Filter extends Component {
  state = {
    userData: data,
    userValue: '',
    filterData: [],
    error: false
  };

  handleOnChange = (e) => {
    const userValue = e.target.value;

    this.setState({
      userValue
    });
  }

  handleFilter = () => {
    const { userValue, userData, filterData } = this.state;

    const results = userData.filter((user, i) => {
      if (Object.values(user).toString().toLowerCase().indexOf(userValue) !== -1) {
        return user;
      }
    });

    this.setState({
      filterData: results,
      error: results.length === 0 ? 'No data founded!' : false
    })
  }

  render() {
    const { userData, userValue, filterData, error } = this.state;

    const data = filterData.length > 0 ? filterData : userData;

    if (error) {
      return (<span>{error}</span>)
    }

    return(
      <div className={styles.container}>
        <section className={styles.order}>
          <input
            type="text"
            placeholder="Type here ..."
            onChange={this.handleOnChange}
          />
          <button
            type="submit"
            onClick={this.handleFilter}
          >
            Filter
          </button>

          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>usename</th>
                <th>email</th>
                <th>phone</th>
                <th>website</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((user, i) => (
                  <tr key={`user-${i}`}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </section>
      </div>
    )
  }
}

export default Filter;
