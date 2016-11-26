var React = require('react');
import Login from '../Login'

var Body = React.createClass({

    render(){
      return (
        <div className="w3-container w3-panel w3-center">
          <Login />
        </div>
      )
    }

});

module.exports = Body;
