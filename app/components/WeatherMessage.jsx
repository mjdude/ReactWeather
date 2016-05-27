var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var location = this.props.location;
    var tempreture = this.props.tempreture;
     console.log(location);
    return (
      <p>Its {tempreture} in {location}</p>
    );
  },
});

module.exports = WeatherMessage;
