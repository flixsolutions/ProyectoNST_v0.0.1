import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

var Header = React.createClass({
    getInitialState(){
      return{
        value1: "test"
      }
    },
    render(){
      return (
        <div className="Header w3-hide-small w3-hide-medium">
          <div className="w3-row w3-center w3-card-4 w3-white">
            <div className="w3-threequarter">
              <img src={"./images/FondoHeaderSinLogo.jpg"} style={{width:"100%"}} className="w3-margin"/>
            </div>
            <div className="w3-quarter">
              <div className="w3-row" >
                  <img src={"./images/logo_femco.png"} style={{width:"90%"}} className="w3-margin"/>
              </div>
            </div>
          </div>
        </div>
    )// return
  }// render
});

export default Header;
