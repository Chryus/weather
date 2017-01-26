import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from '../components/App'
import PromptContainer from '../containers/PromptContainer'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PromptContainer}></IndexRoute>
    </Route>
  </Router>
)
