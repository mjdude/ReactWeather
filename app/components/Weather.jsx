var React = require('react');

var Weather = React.createClass({

  render: function(){
    var location = 'San Francisco';
    return (
      <div>
        <WeatherMessage location={location}></WeatherMessage>
      </div>
    );
  },
});

module.exports = Weather;
