var React = require('react');

// stateless functinoal component , no need to use React.createClass
// because all we do is render

var WeatherMessage = (props) => {
  var {temp, location} = props;

  return (
    <h3>It's it {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
