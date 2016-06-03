var React = require('react');
var {Link} = require('react-router');
// stateless functinoal component , no need to use React.createClass
// because all we do is render
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built with react, open weahter map api and foundation</p>
      <p>Here are some of the tools i've used</p>
    <ul>
      <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the javascript framework used.
      </li>
      <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - Open weather maps api was used for access to weather data.
      </li>
      <li>
        <a href="http://foundation.zurb.com/">Foundation</a> - This was used to style the page.
      </li>
    </ul>
    </div>
  );
};

module.exports = About;
