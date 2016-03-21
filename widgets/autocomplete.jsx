var React = require('react');

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
          {
            results.map(function (name, i) {
              return <li key={"searchname-" + i}>{name}</li>;
            })
          }
        </ul>
      </nav>
    );
  }
});

module.exports = Autocomplete;
