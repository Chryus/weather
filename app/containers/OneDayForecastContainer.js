import React from 'react'
import OneDayForecast from '../components/OneDayForecast'
import OpenWeatherHelpers from '../utils/OpenWeatherHelpers'

class OneDayForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      forecastData: {}
    };
  }

  componentDidMount() {
    OpenWeatherHelpers.getOneDayForecast(dt)
      .then((forecastData) => {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      })
  }

  render() {
    return (
      <OneDayForecast 
        isLoading={this.state.isLoading} 
        header={_.capitalize(this.props.params.city) + " forecast"}
        forecastData={this.state.forecastData}/>
    );
  }
}

export default OneDayForecastContainer;