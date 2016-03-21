var React = require('react');
var ReactDOM = require('react-dom');
var Minesweeper = require('./minesweeper');

var Game = React.createClass({
  render: function () {
    return (
      <div>It works!</div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function (e) {
  ReactDOM.render(<Game />, document.getElementById('main'));
});
