var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var tempreture = this.props.tempreture;
     console.log(name);
    return (
      <p>Its {tempreture} in {name}</p>
    );
  },
});

module.exports = WeatherMessage;
