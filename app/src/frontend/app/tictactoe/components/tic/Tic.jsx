// Dependencies
import React, { Component } from 'react';

// styles
import styles from './Tic.scss';

class Tic extends Component  {
  // Local state
  state = {
    board: Array(9).fill(""),
    player1: true,
    player2: false
  }

  // handleBoard
  handleBoard = (index, player) => {
    const { board, player1, player2 } = this.state;
    console.log('index-->', index)

    if ((board[index] === "" || board[index] === "x") && player) {
      board[index] = "x";

      this.setState({
        board,
        player1: false,
        player2: true
      })
    } else if (board[index] === "" || board[index] === "y") {
      board[index] = "y";
      this.setState({
        board,
        player1: true,
        player2: false
      })
    }
  }

  render() {
    const { board, player1, player2 } = this.state;
    console.log('board-->', board)
    //console.log('player1-->', player1)
    //console.log('player2-->', player2)

    return(
      <div className={styles.container}>
        <h1>Tic tac toe</h1>
        <div className={styles.tic}>
          {
            board.map((item, index) => (
              <section
                key={index}
                className={styles.tic}
                onClick={() => this.handleBoard(index, player1)}
              >
              {
                board[index]
              }
              </section>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Tic;
