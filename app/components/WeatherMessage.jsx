var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var location = this.props.location;
    return (
      <div>
        <h1>the tempreture</h1>
      </div>
    );
  },
});

module.exports = WeatherMessage;
