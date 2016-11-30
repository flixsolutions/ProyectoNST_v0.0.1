var React = require('react');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var Header = React.createClass({

    render(){
      return (
        <div>
          <div className="w3-row w3-center w3-card-4">
            <div className="w3-quarter">
              <img src={"./images/logo_femco.png"} style={{width:"60%"}} className="w3-margin"/>
            </div>
            <div className="w3-half">
              <h2 className="w3-margin">Scorecard NST</h2>
            </div>
            <div className="w3-quarter">
              <div className="w3-row">
                <div className="w3-quarter">
                  <img src={"./images/"+this.props.avatar+".png"} className="w3-hide-small w3-hide-medium w3-padding-16" style={{width:"80px"}} />
                </div>
                <div className="w3-half">
                  <div className="w3-row"><p className="w3-hide-small w3-hide-medium w3-margin-top">{this.props.name}</p></div>
                  <div className="w3-row"><p className="w3-hide-small w3-hide-medium">{this.props.rol}</p></div>
                  <div className="w3-row"><Link to="/login" className="w3-right" style={{cursor:"pointer"}}><i className="fa fa-sign-in"></i> Salir</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

});

module.exports = Header;
