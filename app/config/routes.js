import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import App from '../components/App'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)
