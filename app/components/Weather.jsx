var React = require('react');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultProps: function(){
    return {
      location: 'San Francisco',
    };
  },
  getInitialState: function(){
      return {
        location: this.props.location,
      };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    var location = this.state.location;
    return (
      <div>
        <WeatherMessage location={location}></WeatherMessage>
      </div>
    );
  },
});

module.exports = Weather;
