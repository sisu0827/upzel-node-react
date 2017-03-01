import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FormControl,
  Button
} from 'react-bootstrap'
import { Icon } from 'react-fa'
import { signUp } from '../../actions/auth'

class RegisterForm extends Component {

  static propTypes = {
    signUp: React.PropTypes.func,
    onHide: React.PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      passwordType: 'password',
      passwordIcon: 'eye'
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  changePasswordType() {
    if (this.state.passwordType === 'password') {
      this.setState({
        passwordType: 'text',
        passwordIcon: 'eye-slash'
      })
    } else {
      this.setState({
        passwordType: 'password',
        passwordIcon: 'eye'
      })
    }
  }

  handleChange(field, event) {
    let state = this.state

    state[field] = event.target.value
    this.setState(state)
  }

  onSubmit(event) {
    let {
      firstName,
      lastName,
      email,
      organisation,
      password
    } = this.state

    event.preventDefault()
    this.props.signUp({
      firstName,
      lastName,
      email,
      organisation,
      password
    })
    this.props.onHide()
  }

  render() {
    return (
      <form className="register-form" onSubmit={ this.onSubmit }>
        <div className="row">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <FormControl
                  className="form-control--thin-placeholder"
                  value={ this.state.firstName }
                  onChange={ this.handleChange.bind(this, 'firstName') }
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <FormControl
                  className="form-control--thin-placeholder"
                  onChange={ this.handleChange.bind(this, 'lastName') }
                  value={ this.state.lastName }
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 register-form__item">
            <FormControl
              className="form-control--thin-placeholder"
              onChange={ this.handleChange.bind(this, 'organisation') }
              value={ this.state.organisation }
              type="text"
              placeholder="Organisation"
            />
          </div>
          <div className="col-lg-12 register-form__item">
            <FormControl
              className="form-control--thin-placeholder"
              onChange={ this.handleChange.bind(this, 'phone') }
              value={ this.state.phone }
              type="text"
              placeholder="Phone number (xx-xxxxxxxxxx) (optional)"
            />
          </div>
          <div className="col-lg-12 register-form__item">
            <FormControl
              className="form-control--thin-placeholder"
              onChange={ this.handleChange.bind(this, 'email') }
              value={ this.state.email }
              type="text"
              placeholder="Email address"
            />
          </div>
          <div className="col-lg-12 register-form__item">
            <FormControl
              className="form-control--thin-placeholder"
              onChange={ this.handleChange.bind(this, 'password') }
              value={ this.state.password }
              type={ this.state.passwordType }
              placeholder="Password"
            />
            <Icon
              className="register-form__password-trigger"
              onClick={ this.changePasswordType.bind(this) }
              name={ this.state.passwordIcon }
            />
          </div>
          <div className="col-lg-12 register-form__item">
            <Button
              type="submit"
              className="register-form__submit"
              bsStyle="primary">
              Create account
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(() => ({}), { signUp })(RegisterForm)
