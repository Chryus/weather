import React from 'react'
import Forecast from '../components/forecast'

class ForecastContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Forecast header="forecast"/>
    )
  }
}

export default ForecastContainer;