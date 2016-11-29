var React = require('react');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var Header = React.createClass({

    render(){
      return (
        <div className="w3-row w3-card-4">
          <div className="w3-threequarter w3-container center">
            <h1>Scorecard Nuevas Soluciones Tienda</h1>

          </div>
          <div className="w3-rest w3-container">
            <ul className="w3-ul ">
              <li className="w3-padding-16">
                <img src={"./images/"+this.props.avatar+".png"} className="w3-left w3-circle w3-margin-right" style={{width:"60px"}} />
                <span className="w3-xlarge">{this.props.name}</span><br/>
                <span>{this.props.rol}</span> <Link to="/login" className="w3-right" style={{cursor:"pointer"}}><i className="fa fa-sign-in"></i> Salir</Link>
              </li>
            </ul>
          </div>
        </div>
      )
    }

});

module.exports = Header;
