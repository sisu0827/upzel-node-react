import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import Login from './containers/LoginContainer'
import Main from './containers/MainContainer'
import Upload from './containers/UploadContainer'
import UserMap from './containers/UserMapContainer'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="main" component={Main} />
        <Route path="crmdata/upload" component={Upload} />
        <Route path="usermap" component={UserMap} />
      </Route>
    </Router>
  )
}