import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { signOut } from '../actions/auth'

class MainContainer extends Component {
  render() {
    return (
      <div>
        MainPage <br />
        { this.props.user && this.props.user.fullName } <br />
        <Link to={'/'} onClick={this.props.signOut}>Logout</Link>
      </div>
    )
  }
}

export default connect(
  (state) => ({ user: state.user }),
  { signOut }
)(MainContainer)
