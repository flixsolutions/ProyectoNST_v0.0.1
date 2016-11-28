var React = require('react');
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
var Header = React.createClass({

    render(){
      return (
        <div className="w3-row w3-card-4">
          <div className="w3-threequarter w3-container center">
            <h4>Scorecard Nuevas Soluciones Tienda</h4>
          </div>
          <div className="w3-rest w3-container">
            <ul className="w3-ul ">
              <li className="w3-padding-16">
                <img src="./images/person.png" className="w3-left w3-circle w3-margin-right" style={{width:"60px"}} />
                <span className="w3-xlarge">Susana Gaytán</span><br/>
                <span>CPN</span> <Link data-toggle="pill" to="/login" className="w3-right"><i className="fa fa-sign-in"></i>Salir</Link>
              </li>
            </ul>
          </div>
        </div>
      )
    }

});

module.exports = Header;
