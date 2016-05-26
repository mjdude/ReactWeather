var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>the tempreture in sanfrancisco is 18 degrees</h1>
      </div>
    );
  },
});

module.exports = WeatherMessage;
