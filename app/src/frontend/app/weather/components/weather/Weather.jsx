// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Weather.scss';

// Data.
import users from './data';

class submitText extends Component  {
  // local state
  state = {
    userValue: '',
    results: [],
    actives: [],
    cheked: false
  }

  // To get the user data when type
  handleOnChange = (e) => {
    const value = e.target.value;
    const { userValue } = this.state;

    this.setState({
      userValue: value
    });
  }

  // Method for Search
  handleSearch = () => {
    const { userValue } = this.state;

    // Filter in all the array
    const results = users.filter((user, userIndex) => {
    if (Object.values(user).toString().toLowerCase().indexOf(userValue) !== -1) {
      return user;
    }
    /* This solution is only I want to search in user.name

    if (user.name.toString().toLowerCase().indexOf(userValue.toLowerCase()) !== -1) { // Will check in each user name if the userValue string if match is some letter
      console.log('si hay!')                                                          // "clementine bauch".indexOf('cle')  --> yes found cle in position 0 -> and because 0 is different of -1 (true) enter and return that user
      return user;                                                                    // "clementina dubuque".indexOf('cle')  --> yes found cle in position 0 also -> and because 0 is different of -1 (true) enter and return that user
    }*/

    /* This solution is only if I want to search the exact user.name

    if (user.name.toLowerCase() !== userValue.toLowerCase()) { // will check in each user name if this "clementina dubuque" all the string is there....
      return user;
    }*/
    });

    this.setState({
      results: results
    });
  }

  //Method for handle active Users
  handleActiveUsers = (e) => {
    const { actives, userChecked } = this.state;

    const checkedResults = users.filter((user) => user.active === 'true');

    this.setState({
      actives: checkedResults,
      userChecked: e.target.checked
    });
  }

  render() {
    const { userValue, results, actives, userChecked } = this.state;
    let data;

    if (results.length > 0) {
      data = results;
    } else {
      data = users;
    }

    return(
      <div className={styles.container}>
        <h1>User search</h1>
        <input
          type="text"
          className={styles.search}
          placeholder="Type here..."
          onChange={this.handleOnChange}
        />

        <button
          type="submit"
          onClick={this.handleSearch}
        >Search</button>

        <input
          type="checkbox"
          onChange={this.handleActiveUsers}
        /><span>Active users only</span>

        <p><span>Searched for:</span> {userValue}</p>
        <span>{data.length} result(s)</span>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Active</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

          <tbody>
            {
              actives.length > 0 && userChecked ?
              actives.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.active}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))
              :
              data.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.active}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default submitText;
