var React = require('react');
import Login from '../Login'
import Tabs from '../Tabs'
import Menu from './Menu'
import NotFound from './NotFound'

var Body = React.createClass({

    render(){
      return (
        <div>
            <div className="w3-third">
              <NotFound />
            </div>
            <div className="w3-twothird">
              <Tabs />
            </div>
        </div>
      )
    }

});

module.exports = Body;
