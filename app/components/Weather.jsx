var React = require('react');
var WeatherForm = require('WeatherForm');

var WeatherMessage = React.createClass({
  render: function(){
    var name = this.props.name;
     console.log(name);
    return (
      <h2>Current location is {name}</h2>
    );
  },
});

var Weather = React.createClass({

  // getDefaultProps: function(){
  //   console.log('Setting Initial Props');
  //   return {
  //     location: 'New York',
  //     temp: '14'
  //   }
  // },

  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },

  // getInitialState: function(){
  //   console.log('Setting Initial State');
  //   return {
  //     location: this.props.location.value,
  //   };
  // },

  getInitialState: function () {
  return {
      name: this.props.name,
      message: this.props.message
  };
 },

  handleNewData: function(object){
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
