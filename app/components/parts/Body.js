var React = require('react');
import Login from '../Login'
import Tabs from '../Tabs'
import Menu from './Menu'
import NotFound from './NotFound'

var Body = React.createClass({

    render(){
      return (
        <div>
            <div className="w3-quarter w3-row-padding">
              <Menu />
              <br/>
            </div>
            <div className="w3-threequarter w3-row-padding">
              <Tabs />
            </div>
        </div>
      )
    }

});

module.exports = Body;
