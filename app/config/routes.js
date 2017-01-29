import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from '../components/App'
import PromptContainer from '../containers/PromptContainer'
import ForecastContainer from '../containers/ForecastContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PromptContainer}></IndexRoute>
      <Route path="forecast/:city" component={ForecastContainer}></Route>
    </Route>
  </Router>
)
