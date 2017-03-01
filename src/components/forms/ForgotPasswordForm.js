import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, Button } from 'react-bootstrap'
import { forgotPassword } from '../../actions/auth'

class ForgotPasswordForm extends Component {

  static propTypes = {
    onHide: React.PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.forgotPassword({ email: this.state.email })
    this.props.onHide()
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className="register-form register-form--forgot-password">
        <div className="row">
          <div className="col-lg-12">
            <FormControl
              className="form-control--thin-placeholder"
              type="text"
              placeholder="Registered email address"
            />
          </div>
          <div className="col-lg-12 register-form__item">
            <Button
              value={ this.state.email }
              onChange={ this.handleChange }
              className="register-form__submit"
              type="submit"
              bsStyle="primary">
              Send reset instructions email
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(() => ({}), { forgotPassword })(ForgotPasswordForm)
