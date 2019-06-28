// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Buttons.scss';

// Components
import Button from './Button';

// Data
const words = ['home', 'sweet', 'candy', 'love', 'sucess', 'main'];


class Buttons extends Component  {
  render() {

    return(
      <div className={styles.container}>
        <h1>Buttons</h1>
        {
          words.map((word, index) => (
            <Button
              key={index}
              title={word}
            />
          ))
        }

      </div>
    )
  }
}

export default Buttons;
