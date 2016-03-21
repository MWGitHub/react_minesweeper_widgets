var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({
  getInitialState: function () {
    return {
      searchString: ''
    };
  },

  handleTextChange: function (e) {
    this.setState({searchString: e.target.value});
  },

  render: function () {
    var self = this;
    var results = [];
    var search = this.state.searchString.toLowerCase();
    if (this.state.searchString.length > 0) {
        results = this.props.names.filter(function(el) {
        return el.toLowerCase().indexOf(search) === 0;
      });
    }

    return (
      <nav>
        <input type="text" onChange={this.handleTextChange} value={this.state.searchString} />
        <ul>
          <ReactCSSTransitionGroup transitionName="auto"
                                   transitionEnterTimeout={500}
                                   transitionLeaveTimeout={500}>
            {
              results.map(function (name, i) {
                return <li key={"searchname-" + i}>{name}</li>;
              })
            }
          </ReactCSSTransitionGroup>
        </ul>
      </nav>
    );
  }
});

module.exports = Autocomplete;
