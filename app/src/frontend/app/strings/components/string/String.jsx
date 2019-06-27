// Dependencies
import React, { Component } from 'react';

// styles
import styles from './String.scss';
const string =  `Today was warm with the temperature of 85 degrees. Four days ago the temperature was also warm.
Tomorrow should be colder at 70.
There won’t be any rain in the next few days.
Over the weekend we should expect 70 and 75, while Monday will be cold at 55.
Next week’s weather is expected to be 70, 65, 78, and then 70 the rest of the week.`;

class String extends Component  {
  handleSum = () => {
    const chunks = string.split('\n');

    chunks.forEach(chunk => {
      const words = chunk.replace(',','').replace('.','').split(' ');

      const numbers = words.filter(w => w && !isNaN(w));

      const sum = numbers.length > 0 ? numbers.reduce((a, b) => Number(a) + Number(b)) : 0;
      console.log(sum);
    });
  }

    /*const sentences = string.replace(/[.,]/g, '').split('\n');

    sentences.forEach((sentence) => {
      const line = sentence.split(' ');
      let sum = 0;

      line.map((word, index) => {
        const number = parseInt(word);

        if (!Number.isNaN(number, index)) {
          sum += number;
          return sum;
        }
      })

      console.log('sum-->', sum)
    })*/

  render() {
    return(
      <div className={styles.container}>
        <h1>String</h1>
        <p>You have a text file with proper English sentences. Print the sum of each line’s numbers. Assume round positive numbers only and proper punctuation.</p>
        <button
          type="button"
          onClick={this.handleSum}
        >Sum result</button>

        <p>See browser console</p>
      </div>
    )
  }
}

export default String;
