var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./clock');
var Autocomplete = require('./autocomplete');

var Widget = React.createClass({
  render: function () {
    var goals = [
      {
        title: "First Goal",
        content: "I did it!"
      },
      {
        title: "Second Goal",
        content: "Make a tabs component!"
      },
      {
        title: "Third Goal",
        content: "Selectively Highlight tabs!"
      }
    ];

    var names = [
      'Tommy', 'Lilly', 'Leen', 'Fred', 'Sennacy', 'Carl', 'Johnathan',
      'Breakfast', 'Brandy', 'Beatrice', 'Bill', 'Steve'
    ];

    return (
      <div>
        <Tabs goals={goals} />
        <Clock />
        <Autocomplete names={names} />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widget />, document.getElementById('content'));
});
