import React from 'react'
import ReactDOM from 'react-dom'
import css from './styles/index.css'
import lodash from 'lodash'
import routes from './config/routes'

ReactDOM.render(
  routes,
  document.getElementById('app')
)