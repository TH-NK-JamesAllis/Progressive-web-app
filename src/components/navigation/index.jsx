import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Navigation extends Component {
  render () {
    return (
      <div class='nav'>
        <ul>
          <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
          <li><NavLink activeClassName='active' to='/page2'>Page 2</NavLink></li>
        </ul>
      </div>
    )
  }
}
