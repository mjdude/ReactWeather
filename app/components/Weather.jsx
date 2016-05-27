var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      location: 'San Francisco',
      tempreture: '18'
    };
  },

  getInitialState: function () {
  console.log('Getting initial state');
  return {
      location: this.props.location,
      tempreture: this.props.tempreture
  };
 },

  handleNewData: function(object){
    console.log('Setting state');
    this.setState(object);
    console.log(object);
  },

  render: function(){
    var title = 'Get Weather';
    var location = this.state.location;
    var tempreture = this.state.tempreture;

    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onNewData={this.handleNewData}></WeatherForm>
        <WeatherMessage location={location} tempreture={tempreture}></WeatherMessage>
      </div>
    );
  },
});

module.exports = Weather;
