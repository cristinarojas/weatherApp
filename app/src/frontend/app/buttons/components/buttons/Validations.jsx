// Dependencies
import React, { Component } from 'react';

class Validations extends Component  {
  render() {
    const data = [];
    const algo = null;
    const name = 'cristina';
    const active = true;

    console.log('name..>', typeof name);
    return(
      <div>
        <h2>Validations</h2>
        <h3>Arrays</h3>
        <p>
        {
          data.length > 0 ? data : 'No data length'
        }
        </p>

        <p>
        {
          data === undefined ? data : 'No data in array undefined'
        }
        </p>

        <p>
        {
          data === null ? data : 'No data in array null'
        }
        </p>

        <p>
        {
          data.length ? data : 'No data in array.length'
        }
        </p>

        <h3>Strings</h3>
        <p>
        {
          name.length ? name : 'No string not length'
        }
        </p>
        <p>
        {
          name ? name : 'No string exist'
        }
        </p>
        <p>
        {
          name !== null ? name : 'No string not null'
        }
        </p>
        <p>
        {
          name !== '' ? name : 'No string not empty'
        }
        </p>
        <p>
        {
          name === '' ? name : 'the string is not empty'
        }
        </p>
        <h3>Booleans</h3>
        <p>
        {
          active ? active : 'is false'
        }
        </p>
        <p>
        {
          !active ? active : 'is true'
        }
        </p>
      </div>
    )
  }
}

export default Validations;
