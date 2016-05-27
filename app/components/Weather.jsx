var React = require('react');
var WeatherForm = require('WeatherForm');

var WeatherMessage = React.createClass({
  render: function(){
    var name = this.props.name;
     console.log(name);
    return (
      <h2>Current name is {name}</h2>
    );
  },
});

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

    return (
      <div>
        <h1>{title}</h1>
        <WeatherForm onNewData={this.handleNewData}></WeatherForm>
        <WeatherMessage name={name}></WeatherMessage>

      </div>
    );
  },
});

module.exports = Weather;
