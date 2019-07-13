/*user = {
username: 'test',
    firstname: 'Test First',
    lastname: 'Test Last'
}
functional component UserDetail that renders username (in green text), firstname and lastname in new lines
<UserDetail user={user} /> */

// Dependencies
import React, { Fragment, PropTypes } from 'react';

// styles
import styles from './Filters.scss';

// Components
import SortString from './SortString';
import SortNumbers from './SortNumbers';
import ObjectNumbers from './ObjectNumbers';
import Filter from './Filter';

/*const userIds = [1, 2];
const users = {
    1: {
      username: 'test1',
      firstname: 'Test First 1',
      lastname: 'Test Last 1'
    },
    2: {
      username: 'test2',
    firstname: 'Test First 2',
    lastname: 'Test Last 2'
    }
};*/
/*

userIds = [1, 2]
users = {
    1: {
username: 'test1',
    firstname: 'Test First 1',
    lastname: 'Test Last 1'
    },
2: {
username: 'test2',
    firstname: 'Test First 2',
    lastname: 'Test Last 2'
    }
}
create a class component UserList that renders the list of users instead of single user:
<UserList userIds={userIds} users={users} />*/

const Filters = () => (
    <>
      <SortString />
      <SortNumbers />
      <ObjectNumbers />
      <Filter />
    </>
);

export default Filters;
