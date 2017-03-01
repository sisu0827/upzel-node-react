import { browserHistory } from 'react-router'
import { instance } from '../static/config'

export const signIn = data => dispatch => {
  instance.post('signin', data)
    .then(response => {
      if (response.data.status === 'success') {
        dispatch({
          type: 'SIGN_IN',
          payload: response.data
        })
        browserHistory.push('/main')
      }
    })
}

export const signUp = data => dispatch => {
  instance.post('create-user', data)
    .then(response => {
      if (response.data.status === 'success') {
        dispatch({
          type: 'SIGN_IN',
          payload: response.data
        })
      }
    })
}

export const forgotPassword = data => dispatch => {
  instance.post('forgot-password', data)
    .then(response => {
      if (response.data.status === 'success')
        dispatch({ type: 'SIGN_OUT' })
    })
}

export const signOut = () => ({ type: 'SIGN_OUT' })
