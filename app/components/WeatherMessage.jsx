var React = require('react');

// stateless functinoal component , no need to use React.createClass
// because all we do is render

// We can also remove 'props' to ame it shoter by using destructuing in the passed in arguments
// temp and locations are attributes of props
var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}.</h3>
  )
}

module.exports = WeatherMessage;
