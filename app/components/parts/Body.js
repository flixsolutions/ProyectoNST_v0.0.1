var React = require('react');
import Login from '../Login'
import Tabs from '../Tabs'
import Menu from './Menu'
import NotFound from './NotFound'

var Body = React.createClass({

    render(){
      return (
        <div className="w3-row w3-container">
            <div className="w3-quarter w3-container">
              <Menu />
            </div>
            <div className="w3-threequarter w3-container">
              <Tabs />
            </div>
        </div>
      )
    }

});

module.exports = Body;
