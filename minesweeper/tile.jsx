var React = require('react');

var Tile = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    this.props.update(this.props.tile, false);
  },

  flagClick: function(e) {
    e.preventDefault();
    this.props.update(this.props.tile, true);
  },

  render: function() {
    var cls = "tile";
    var text = "";
    var tile = this.props.tile;
    if (tile.flagged) {
      cls += " flagged";
    } else if (tile.explored) {
      if (tile.bombed) {
        cls += " bombed";
      } else {
        text = this.props.tile.adjacentBombCount() || "";
      }
      cls += " explored";
    }

    return (
      <div onClick={this.handleClick}
           onContextMenu={this.flagClick}
           className={cls}>{text}</div>
    );
  }
});

module.exports = Tile;
