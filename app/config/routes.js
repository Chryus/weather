import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from '../components/App'
import PromptContainer from '../containers/PromptContainer'
import FiveDayForecastContainer from '../containers/FiveDayForecastContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PromptContainer}></IndexRoute>
      <Route path="forecast/:city" component={FiveDayForecastContainer}></Route>
      <Route path="forecast/:city/:day" component={FiveDayForecastContainer}></Route>
    </Route>
  </Router>
)
