var React = require('react');
var WeatherForm = require('WeatherForm');


var Weather = React.createClass({



  getInitialState: function(){
    console.log('Setting Initial State');
    return {
      location: 'San Francisco'
    };
  },
  handleNewData: function(object){
    this.setState(object);
    console.log(object);
  },

  render: function(){
    var title = 'Get Weather';
    var location = this.state.location;
    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onNewData={this.handleNewData}></WeatherForm>
        <h2>Current location is {location}</h2>
      </div>
    );
  },
});

module.exports = Weather;
