import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func, object } from 'prop-types';

import styles from './Post.scss';

class Post extends Component {
  render() {
    const { id, title, body } = this.props;

    return (
      <div className={styles.Post}>
        <h2>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
