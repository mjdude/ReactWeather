var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var object = {};
    var name = this.refs.name.value;
    console.log('onFormSubmit');
    console.log(name);

    if (name.length > 0) {
      this.refs.name ='';
      object.name = name;
    }

    this.props.onNewData(object);
  },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter City Name"></input>
        </div>
      <div>
        <button>Submit</button>
      </div>
      </form>
    );
  },
});

module.exports = WeatherForm;
