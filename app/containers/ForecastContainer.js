import React from 'react'
import Forecast from '../components/forecast'

class ForecastContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Forecast 
        header="forecast"
        cityForecastData={this.props.location.state.cityForecastData}/>
    )
  }
}

export default ForecastContainer;