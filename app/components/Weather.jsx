var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var object = {};
    var location = this.refs.location.value;
    console.log(this.refs.location);

    if (location.length > 0) {
      object.location = location;
      this.props.onNewData(object);
    }

  },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter City Name"></input>
        </div>
      <div>
        <button>Submit</button>
      </div>
      </form>
    );
  },
});

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
