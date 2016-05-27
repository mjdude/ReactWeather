var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var tempreture = this.props.tempreture;
     console.log(name);
    return (
      <h2>Its {tempreture} in {name}</h2>
    );
  },
});

module.exports = WeatherMessage;
