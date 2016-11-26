import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header from './components/parts/Header'
import Body from './components/parts/Body'
import Footer from './components/parts/Footer'

const App = () =>(
    <div>
      <Header />

      <Body />

      <Footer />
    </div>
  )

export default App
