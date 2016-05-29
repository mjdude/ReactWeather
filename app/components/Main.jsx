var React = require('react');
var Nav = require('Nav');

// stateless functinoal component , no need to use React.createClass
// because all we do is render

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
