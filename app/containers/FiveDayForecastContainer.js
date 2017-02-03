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
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
  }

  handleThumbnailClick(event) {
    event.preventDefault();
    debugger
    this.context.router.push({
      pathname: '/forecast/' + this.props.params.city + '/day',
      query: {
        location: this.props.params.city,
        dt: 'day'
      }
    });

  }

  componentDidMount() {
    OpenWeatherHelpers.getFiveDayForecast(this.props.params.city)
      .then((forecastData) => {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.city != nextProps.params.city) {
      OpenWeatherHelpers.getFiveDayForecast(nextProps.params.city)
        .then((forecastData) => {
          this.setState({
            isLoading: false,
            forecastData: forecastData
          });
        })
    }
  }

  render() {
    return (
      <Forecast
        onThumbnailClick={this.handleThumbnailClick}
        isLoading={this.state.isLoading} 
        header={_.capitalize(this.props.params.city) + " forecast"}
        forecastData={this.state.forecastData}/>
    )
  }
}

export default FiveDayForecastContainer;