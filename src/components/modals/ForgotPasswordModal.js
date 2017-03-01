import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Icon } from 'react-fa'

import ForgotPasswordForm from '../forms/ForgotPasswordForm'

export default class RegisterModal extends Component {

  static propTypes = {
    showModal: React.PropTypes.bool,
    onHide: React.PropTypes.func
  }

  render() {
    return (
      <Modal show={ this.props.showModal } onHide={ this.props.onHide }>
        <Modal.Header>
          <Icon
            className="modal-close"
            onClick={ this.props.onHide }
            name="times-circle"
          />
        </Modal.Header>
        <Modal.Body>
          <h4>Can't sign in ? Forgot your password ?</h4>
          <h5>Enter your registered email address below and we will send you the instructions to reset password</h5>
          <ForgotPasswordForm
            onHide={ this.props.onHide }
          />
        </Modal.Body>
        <Modal.Footer>
          <p>Note</p>
          <p>If you don't get an email from us within a few minutes please be sure to check your spam filter or spam folder.</p>
        </Modal.Footer>
      </Modal>
    )
  }
}
