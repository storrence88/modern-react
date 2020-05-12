import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    // Center cell
    flipCell(y, x);
    // North cell
    flipCell(y + 1, x);
    // South cell
    flipCell(y - 1, x);
    // East cell
    flipCell(y, x + 1);
    // West cell
    flipCell(y, x - 1);

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      return (
        <div className='Board-title'>
          <div className='winner'>
            <span className='neon-orange'>You</span>
            <span className='neon-blue'>Win!</span>
          </div>
        </div>
      );
    }
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
    const tableBoard = this.state.board.map((row, y) => (
      <tr key={y}>
        {row.map((cell, x) => {
          const coord = `${y}-${x}`;
          return (
            <Cell key={coord} isLit={cell} flipCellsAroundMe={() => this.flipCellsAround(coord)} />
          );
        })}
      </tr>
    ));

    return (
      <div>
        <div className='Board-title'>
          <div className='neon-orange'>Lights</div>
          <div className='neon-blue'>Out</div>
        </div>
        <table className='Board'>
          <tbody>{tableBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
