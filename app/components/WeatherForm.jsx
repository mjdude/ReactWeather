var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var object = {};
    var location = this.refs.location.value;
    console.log('onFormSubmit');
    console.log(location);

    if (location.length > 0) {
      this.refs.location.value ='';
      object.location = location;
    }

    this.props.onNewData(object);
  },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter City location"></input>
        </div>
      <div>
        <button>Get Weather</button>
      </div>
      </form>
    );
  },
});

module.exports = WeatherForm;
