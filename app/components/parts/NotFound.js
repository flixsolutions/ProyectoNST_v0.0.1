var React = require('react');

var NotFound = React.createClass({

    render(){
      return (
        <div className="w3-center">
          <h1>404... Page not found!</h1>
          <a href="/">Regresar</a>          
        </div>
      )
    }

});

module.exports = NotFound;
