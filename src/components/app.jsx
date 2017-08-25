import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from './navigation/'

import Home from './home/'
import Page2 from './page2/'

export default class App extends Component {
  render () {
    return (
      
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/page2' component={Page2} />
        </Switch>
      </div>
      
    )
  }
}
