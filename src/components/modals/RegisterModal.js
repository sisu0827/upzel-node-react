import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Icon } from 'react-fa'
import RegisterForm from '../forms/RegisterForm'

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
          <h4>Sign up</h4>
          <h5>Our team will get in touch with you for explaining next steps</h5>
          <RegisterForm
            onHide={ this.props.onHide }
          />
        </Modal.Body>
      </Modal>
    )
  }
}
