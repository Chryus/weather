import React from 'react'
import lodash from 'lodash'
import Forecast from '../components/forecast'
import OpenWeatherHelpers from '../utils/OpenWeatherHelpers'

class FiveDayForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      forecastData: {}
    };
  }

  componentDidMount() {
    OpenWeatherHelpers.getCityForecast(this.props.params.city)
      .then((forecastData) => {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      })
  }

  render() {
    return (
      <Forecast 
        isLoading={this.state.isLoading} 
        header={_.capitalize(this.props.params.city) + " forecast"}
        forecastData={this.state.forecastData}/>
    )
  }
}

export default FiveDayForecastContainer;