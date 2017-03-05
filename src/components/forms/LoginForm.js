import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button
} from 'react-bootstrap'

import RegisterModal from '../modals/RegisterModal'
import ForgotPasswordModal from '../modals/ForgotPasswordModal'
import { signIn } from '../../actions/auth'

class LoginForm extends Component {

  static propTypes = {
    signIn: React.PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      registerModal: false,
      forgotPasswordModal: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, value) {
    let state = this.state

    state[field] = typeof value === 'object' ? value.target.value : value
    this.setState(state)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.signIn({
      email: this.state.userEmail,
      password: this.state.userPassword
    })
  }

  render() {
    return (
      <form className="login__form" onSubmit={ this.handleSubmit }>
        <FormGroup>
          <ControlLabel>User Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="jeremyclarkson@adfolks.me"
            value={ this.state.userEmail }
            onChange={ this.handleChange.bind(this, 'userEmail') }
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="••••••••••"
            value={ this.state.userPassword }
            onChange={ this.handleChange.bind(this, 'userPassword') }
          />
        </FormGroup>
        <FormGroup>
          <Checkbox>
            Remember Me
          </Checkbox>
        </FormGroup>
        <FormGroup>
          <Button type="submit" bsStyle="primary">Sign In</Button>
        </FormGroup>
        <FormGroup bsClass="text-center">
          <a onClick={ this.handleChange.bind(this, 'forgotPasswordModal', true) }
            className="login__forgot">Forgot password?</a>
        </FormGroup>
        <FormGroup>
          <Button
            onClick={ this.handleChange.bind(this, 'registerModal', true) }
            bsStyle="default">
            Create an Account
          </Button>
        </FormGroup>
        <RegisterModal
          showModal={ this.state.registerModal }
          onHide={ this.handleChange.bind(this, 'registerModal', false) }
        />
        <ForgotPasswordModal
          showModal={ this.state.forgotPasswordModal }
          onHide={ this.handleChange.bind(this, 'forgotPasswordModal', false) }
        />
      </form>
    )
  }
}

export default connect(() => ({}), { signIn })(LoginForm)
