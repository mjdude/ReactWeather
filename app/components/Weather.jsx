var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'Miami',
      temp: 28
    };
  },

  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 23
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
