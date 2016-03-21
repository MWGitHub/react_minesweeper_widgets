import React from 'react';
import ReactDOM from 'react-dom';

var Widget = React.createClass({
  render: function () {
    return (
      <div>Hello</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widget />, document.getElementById('content'));
});
