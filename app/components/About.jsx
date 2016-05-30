var React = require('react');

// stateless functinoal component , no need to use React.createClass
// because all we do is render
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the abouts page</p>
    </div>
  );
};

module.exports = About;
