import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import NotFound from './components/parts/NotFound'
import Header from './components/parts/Header'
import Body from './components/parts/Body'
import Footer from './components/parts/Footer'
import Login from './components/Login'
import Kpi from './components/Kpi'

var RouteHandler = Router.RouteHandler;

const Container = (props) => <div className="w3-row">
  <div className="w3-row w3-margin">
    <Header name="Susana Gaytan" rol="CPN" avatar="avatar_susy"/>
  </div>
  <div className="w3-row w3-margin">
    {props.children}
  </div>
  <div className="w3-row w3-margin">
    <Footer />
  </div>
</div>

var App = React.createClass({

    render(){
      return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Login} />
          <Route path='/dashboard' component={Body} />
          <Route path='/kpi' component={Kpi} />
          <Route path='/login' component={Login} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
  )}

});

module.exports = App;
