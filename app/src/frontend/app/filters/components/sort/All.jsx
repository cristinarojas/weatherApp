// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Styles.scss';

// Data
import users from './filterData.js';
import arrayData from './dataStrings.js';
import numbers from './dataNumbers.js';

class All extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userValueTodo: '',
      toDoList: [],
      users: users,
      userValueFilter: '',
      filteredUsers: [],
      dataNumbers: numbers,
      orderedNumbers: [],
      isOrdered: false,
      dataString: arrayData,
      orderedData: []
    }
  }

  handleOnChange = (e) => {
    const { users } = this.state;

    if(e.target.name === "userValueFilter") {
      const userValue = e.target.value;
      const results = arrayData.filter((user, indexUser) => {
        return (user.toString().toLowerCase().indexOf(userValue) !== - 1);
      })

      this.setState({
        filteredUsers: results
      })
    }

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddTodo = (e) => {
    const { userValueTodo, toDoList  } = this.state;

    this.setState({
      toDoList: [...toDoList, userValueTodo]
    })
  }

  handleRemove = (i) => {
    const { toDoList } = this.state;

    const results = toDoList.filter((todo, indexTodo) => {
      return indexTodo !== i;
    });

    this.setState({
      toDoList: results
    })
  }

  handleSort = () => {
    const { dataNumbers, orderedNumbers, isOrdered } = this.state;
    let ordered = [];

    if (!isOrdered) {
      ordered = dataNumbers.sort((a, b) => {
        return b - a;
      });
    } else {
      ordered = dataNumbers.sort((a, b) => {
        return a - b;
      })
    }

    this.setState({
      orderedNumbers: ordered,
      isOrdered: !isOrdered
    })

  }

  sortData = () => {
    const { dataString } = this.state;
    let results = [];

    results = dataString.sort((a, b) => {
      a = a.toLowerCase();
      b = b.toLowerCase();

      return b > a ? 1 : a > b ? -1 : 0;
    })

    console.log('results--->', results)

    this.setState({
      orderedData: results
    })
  }

  render() {
    const {
        userValueTodo,
        toDoList,
        users,
        userValueFilter,
        filteredUsers,
        dataNumbers,
        orderedNumbers,
        dataString,
        orderedData
      } = this.state;

    const usersData = filteredUsers.length > 0 ? filteredUsers : arrayData;
    const usersDataStrings = orderedData.length > 0 ? orderedData : dataString;
    console.log('orderedData--->', orderedData)
    return (
      <div className={styles.allContainer}>
        <h1>Todo list</h1>
        <input
          type="text"
          name="userValueTodo"
          onChange={this.handleOnChange}
        />
        <button
          type="button"
          onClick={this.handleAddTodo}
        >Add to do</button>

        <p
          className={`${styles.base} ${userValueTodo ? `${styles.word}` : ''}`}
        >{userValueTodo}</p>


        <p>Todo List</p>

        <ul>
          {
            toDoList && toDoList.map((todo, i) => (
              <li
                key={i}
              >
                <span onClick={() => this.handleRemove(i)}> X </span>
                {todo}
              </li>
            ))
          }
        </ul>

        <h1>Filter</h1>
        <input
          type="text"
          name="userValueFilter"
          onChange={this.handleOnChange}
        />
        <ul>
          {
            usersData && usersData.map((user, i) => (
              <li key={i}>{user}</li>
            ))
          }
        </ul>

        <h1>Sorted Numbers</h1>
        <button
          type="button"
          onClick={this.handleSort}
        >Sort Number</button>
        <ul>
          {
            dataNumbers.map((number, i) => (
              <li key={i}>{number}</li>
            ))
          }
        </ul>

        <h1>Order data</h1>
        <button
          type="button"
          onClick={this.sortData}
        >Sort data</button>
        <ul>
          {
            usersDataStrings && usersDataStrings.map((user, i) => (
              <li key={i}>{user}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default All;
