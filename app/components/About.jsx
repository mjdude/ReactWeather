var React = require('react');
var {Link} = require('react-router');
// stateless functinoal component , no need to use React.createClass
// because all we do is render
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to the abouts page. This app allows you to query for the weather in any city
      in the world. Below i've put in a few links to tools used to build this app</p>
    <ul>
      <li>
          <a href="https://facebook.github.io/react/">React as a front end library</a>
      </li>
      <li>
          <a href="http://openweathermap.org/">Open weather maps api for access to weather data</a>
      </li>
      <li>
        <a href="http://foundation.zurb.com/">Foundation to style the page</a>
      </li>
    </ul>
    </div>
  );
};

module.exports = About;
