import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import NotFound from './components/parts/NotFound'
import Header from './components/parts/Header'
import Body from './components/parts/Body'
import Footer from './components/parts/Footer'
import Login from './components/Login'
import Kpi from './components/Kpi'

var RouteHandler = Router.RouteHandler;


const App = () =>(
    <div >
      <Header />
      <br />
      <Router history={hashHistory}>
        <Route path='/' component={Body} />
        <Route path='/login' component={Login} />
        <Route path='/kpi' component={Kpi} />
        <Route path='*' component={NotFound} />
      </Router>
      <Footer />
    </div>
  )

export default App
