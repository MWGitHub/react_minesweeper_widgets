var React = require('react');

var Header = React.createClass({
  render: function() {
    var highlighted = {};
    if (!this.props.selected) {
      highlighted.fontWeight = "400";
    }
    return (
      <li onClick={this.props.onClick}><h1 style={highlighted}>{this.props.title}</h1></li>
    );
  }
});

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      index: 0
    };
  },

  updateIndex: function (i) {
    this.setState({
      index: i
    });
  },

  render: function () {

    var self = this;

    return (
      <div>
        <ul>
        {this.props.goals.map(function(el, i) {
          return <Header key={i} title={el.title}
            selected={self.state.index === i}
            onClick={self.updateIndex.bind(self, i)} />;
        })}
        </ul>
        <article>
          <p>{this.props.goals[this.state.index].content}</p>
        </article>
      </div>

    );
  }
});


module.exports = Tabs;
