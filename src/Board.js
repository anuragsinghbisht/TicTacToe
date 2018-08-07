import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
      const squares = this.state.squares.slice();
      if (squares[i] || calculateWinner(squares)) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      });
  }

  renderSquares(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  }

  render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="board">
          <div className="board-status">{status}</div>
          <div className="board-row">
            {this.renderSquares(0)}
            {this.renderSquares(1)}
            {this.renderSquares(2)}
          </div>
          <div className="board-row">
            {this.renderSquares(3)}
            {this.renderSquares(4)}
            {this.renderSquares(5)}
          </div>
          <div className="board-row">
            {this.renderSquares(6)}
            {this.renderSquares(7)}
            {this.renderSquares(8)}
          </div>
        </div>
      );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

module.exports = Board;
