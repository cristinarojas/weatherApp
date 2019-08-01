// Dependencies
import React, { Component } from 'react';

// styles
import styles from './styles.scss';

// Context & provider
import { NamesContext, NamesProvider } from '../context';

class Name extends Component {
  render() {
    return (
      <NamesProvider>
        <NamesContext.Consumer>
          {({
            actions: {
              handleOnChange,
              getWeather
            },
            data: {
              names,
              weatherResults
            }
          }) => {
            return (
              <div className={styles.container}>
                <h1>I'm Name Component</h1>
                <input
                  type="text"
                  name="userName"
                  onChange={handleOnChange}
                  placeholder="Type..."
                />

                <h2>:::Weather Results:::</h2>
                {
                  weatherResults.base && weatherResults.base.length > 0 ?
                  <h2>{weatherResults.base}</h2> : ''
                }
              </div>
            )
          }}
        </NamesContext.Consumer>
      </NamesProvider>
    )
  }
}

export default Name;
