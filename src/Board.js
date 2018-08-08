import React, { Component } from 'react';
import Square from './Square';

function renderSquares(props, i) {
  return (
    <Square
      value={props.squares[i]}
      onClick={() => props.onClick(i)}/>
    );
}

function Board(props) {
  return (
    <div className="board">
      <div className="board-row">
        {renderSquares(props, 0)}
        {renderSquares(props, 1)}
        {renderSquares(props, 2)}
      </div>
      <div className="board-row">
        {renderSquares(props, 3)}
        {renderSquares(props, 4)}
        {renderSquares(props, 5)}
      </div>
      <div className="board-row">
        {renderSquares(props, 6)}
        {renderSquares(props, 7)}
        {renderSquares(props, 8)}
      </div>
    </div>
  );
}

module.exports = Board;
