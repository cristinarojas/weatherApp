// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Button.scss';

class Button extends Component  {
  state = {
    ok: false
  };

  handleAlert = (title) => {
    this.setState(prevState => ({
      ok: !prevState.ok
    }));

    console.log(title)
  }

  render() {
    const { title } = this.props;
    const { ok } = this.state;

    console.log('ok-->', ok)
    return(
      <div className={styles.container}>
        <button
          type="button"
          onClick={() => this.handleAlert(title)}
          className={`${ok  ? `${styles.ok}` : '' }`}
        >
          {title}
        </button>{`${ok}`}
      </div>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string
};

export default Button;
