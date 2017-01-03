var React = require('react');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var Header = React.createClass({

    render(){
      return (
        <div>
          <div className="w3-row w3-center w3-card-4 w3-white">
            <div className="w3-quarter">
              <Link to="/dashboard" className="w3-right" style={{cursor:"pointer"}}><img src={"./images/logo_femco.png"} style={{width:"60%"}} className="w3-margin"/></Link>
            </div>
            <div className="w3-half">
              <h2 className="w3-margin">Scorecard NST</h2>
            </div>
            <div className="w3-quarter">
              <div className="w3-row">
                  <div className="w3-row"><Link to="/login" className="w3-right" style={{cursor:"pointer"}}><i className="fa fa-sign-in"></i> Salir</Link></div>
              </div>
            </div>
          </div>
        </div>
      )
    }

});

module.exports = Header;
