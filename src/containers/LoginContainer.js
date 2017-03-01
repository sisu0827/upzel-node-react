import React, { Component } from 'react'

import TopBorder from '../components/TopBorder'
import Login from '../components/Login'

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <TopBorder />
        <Login />
      </div>
    )
  }
}
