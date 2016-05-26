var React = require('react');
var WeatherForm = require('WeatherForm');
var Weather = React.createClass({

  handleNewData: function(object){
    this.setState(object);
    console.log(object);
  },

  render: function(){
    var title = 'Get Weather';
    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onNewData={this.handleNewData}></WeatherForm>
      </div>
    );
  },
});

module.exports = Weather;
