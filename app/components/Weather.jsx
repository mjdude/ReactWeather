var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 28
    };
  },

  handleSearch: function(location){
    var that = this;
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
          location: location,
          temp: temp
      });
    }, function(errorMessage){
      alert(errorMessage);
    });
    
  },

  render: function(){
    var title = 'Get Weather';
    var {temp, location} = this.state;
    // var me = this.state.name;
    // var tempreture = this.state.tempreture;

    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <WeatherMessage location={location} temp={temp}></WeatherMessage>
      </div>
    );
  },
});

module.exports = Weather;
