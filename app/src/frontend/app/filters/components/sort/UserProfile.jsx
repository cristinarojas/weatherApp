// Dependencies
import React, { Component, PropTypes } from 'react';

// styles
import styles from './Users.scss';

class UserProfile extends Component {
  render() {
    const { userIds, users }  = this.props;
    console.log('userIds->', userIds)

    return (
      <div>
        <p>{users}</p>
      </div>
    )
  }
}

export default UserProfile;
