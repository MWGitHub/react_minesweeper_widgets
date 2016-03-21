var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');
var Board = require('./board');

var Game = React.createClass({
  getInitialState: function() {
    return {
      isModal: false,
      board: new Minesweeper.Board(10, 10)
    };
  },

  updateGame: function(tile, isFlagged) {
    if (isFlagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState(
      {
        isModal: this.state.board.won() || this.state.board.lost(),
        board: this.state.board
      }
    );
  },

  restartGame: function(e) {
    this.setState(
      {
        board: new Minesweeper.Board(10, 10),
        isModal: false
      }
    );
  },

  render: function() {
    var modal = '';
    if (this.state.isModal) {
      modal = (
        <div className="modal">
          <div className="modal-content">
            <h2>You have {this.state.board.won() ? 'won' : 'lost'}!</h2>
            <button onClick={this.restartGame}>Restart Game</button>
          </div>
        </div>
      );
    }

    return (
      <div className="game">
        {modal}
        <h1>Minesweeper!</h1>
        <Board board={this.state.board} update={this.updateGame} />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function (e) {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
