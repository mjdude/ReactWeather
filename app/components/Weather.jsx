var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'San Francisco',
      tempreture: '18'
    };
  },

  getInitialState: function () {
  console.log('Getting initial state');
  return {
      name: this.props.name,
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
    var name = this.state.name;
    var tempreture = this.state.tempreture;

    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onNewData={this.handleNewData}></WeatherForm>
        <WeatherMessage name={name} tempreture={tempreture}></WeatherMessage>
      </div>
    );
  },
});

module.exports = Weather;
