import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import NotFound from './components/parts/NotFound'
import Header from './components/parts/Header'
import Body from './components/parts/Body'
import Footer from './components/parts/Footer'
import Login from './components/Login'
import Kpi from './components/Kpi'

var RouteHandler = Router.RouteHandler;

// const Container = (props) => <div className="w3-row">
//   <div className="w3-row w3-margin">
//     <Header name="Susy" rol="" avatar="avatar_susy"/>
//   </div>
//   <div className="w3-row w3-margin">
//     {props.children}
//   </div>
//   <div className="w3-row w3-margin">
//     <Footer />
//   </div>
// </div>

var Container = React.createClass({
  render(){
    return(
      <div className="w3-row">
        <div className="w3-row w3-margin">
          <Header name="" rol="" avatar="" validUser={this.props.isValidUser}/>
        </div>
        <div className="w3-row w3-margin">
          {this.props.children}
        </div>
        <div className="w3-row w3-margin">
          <Footer />
        </div>
      </div>
    )
  }
});

var LoginWrapper = React.createClass({
  getInitialState(){
    return{
      isValidUser:this.props.isValidUser
    }
  },
  checkUser(user,pass){
      this.setState({
        isValidUser:true
      })
      this.props.router.push('/dashboard');
    },
  render () {
    return (
        <Login checkLogin={this.checkUser} />
    );
  }
});

var App = React.createClass({
    getInitialState(){
      return{
        isValidUser:false
      }
    },
    render(){
      return (
      <Router history={hashHistory} >
        <Route path='/' component={Container}>
          <IndexRoute component={LoginWrapper} />
          <Route path='/dashboard' component={Body} />
          <Route path='/kpi' component={Kpi} />
          <Route path='/login' component={LoginWrapper} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )// return
  }// render
});

module.exports = App;
