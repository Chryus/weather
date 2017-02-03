import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import MainContainer from '../containers/MainContainer'
import PromptContainer from '../containers/PromptContainer'
import FiveDayForecastContainer from '../containers/FiveDayForecastContainer'
import OneDayForecastContainer from '../containers/OneDayForecastContainer'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={PromptContainer}></IndexRoute>
      <Route path="forecast/:city" component={FiveDayForecastContainer}></Route>
      <Route path="forecast/:city/:day" component={OneDayForecastContainer}></Route>
    </Route>
  </Router>
)
