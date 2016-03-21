var React = require('react');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      weather: null
    };
  },

  componentDidMount: function() {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (e) {
      var request = new XMLHttpRequest();
      var longitude = e.coords.longitude;
      var latitude = e.coords.latitude;
      var apikey = "645c5d39c7603f17e23fcaffcea1a3c1";
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + "&appid=" +apikey;
      request.open('GET', url);
      request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE ) {
          if(request.status == 200) {

            var data = JSON.parse(request.responseText);
            var fahrenheit = Math.floor(data.main.temp * 1.8 - 459.67);
            self.setState({ weather: fahrenheit });
          }
          else if(request.status == 400) {
            console.log('There was an error 400');
          }
          else {
            console.log('something else other than 200 was returned');
          }
        }
      };
      request.send();
    });
  },

  render: function() {
    return (
      <div>
        <p>The temperature is {this.state.weather ? this.state.weather : "pending"} degrees</p>

      </div>
    );
  }
});


var Clock = React.createClass({
  getInitialState: function() {
    return {
      time: new Date()
    };
  },
  componentDidMount: function() {
    var self = this;
    this.interval = setInterval(function(){
      self.setState({time: new Date()});
    }, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function (){
    return (
      <div>
        <p>
          {this.state.time.toString()}
        </p>
        <Weather />
      </div>
    );
  }
});


module.exports = Clock;
