var React = require('react');
var Tile = require('./tile');


var Board = React.createClass({


  render: function() {
    var self = this;

    return (
      <div className="board group">
        {
          this.props.board.grid.map(function(row, i) {
            return (
              <div className="group" key={"row-" + i}>
                {
                  row.map(function(tile, i) {
                    return <Tile key={"tile-" + i} update={self.props.update} tile={tile} />;
                  })
                }
              </div>
            );
          })
        }
      </div>
    );
  }
});

module.exports = Board;
