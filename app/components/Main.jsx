var React = require('react');
var NavComponent = ('NavComponent');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <NavComponent></NavComponent>
        <h2>Main Component</h2>
      </div>
    );
  },
});

module.exports = Main;
