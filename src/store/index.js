import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'
import Routes from '../routes'

const logger = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

export default () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Routes />
    </Provider>
  )
}
