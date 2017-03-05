import React, { Component } from 'react'
import { Link } from 'react-router'

import LoginForm from './forms/LoginForm'

import logo from '../static/images/logotype.svg'
import Background from '../static/images/bg.png'

export default class Login extends Component {
  render() {
    return (
      <div className="login-wrapper" style={{ backgroundImage: `url(${Background})` }}>
        <div className="login">
          <div className="login__logo">
            <Link to={'/'} className="login__logo-link">
              <img src={ logo } alt="Upzel logo"/>
            </Link>
          </div>
          <div className="login__subtitle">
            CRM Enhancer V1.0
          </div>
          <LoginForm />
        </div>
      </div>
    )
  }
}
