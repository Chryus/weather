import React from 'react'
import FiveDayForecast from '../components/FiveDayForecast'
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
    const index = event.target.closest("[data]").getAttribute('data');
    const forecastData = this.state.forecastData.data.list[index];
    const timestamp = forecastData.dt;
    const date = new Date(timestamp * 1000);
    const day = date.toLocaleString('en-US', { weekday: 'long' })
    this.context.router.push({
      pathname: '/forecast/' + _.lowerFirst(this.props.params.city) + '/' + _.lowerFirst(day),
      query: {
        header: this.props.params.city,
        timestamp: timestamp,
        forecastData: JSON.stringify(forecastData)
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
      <FiveDayForecast
        onThumbnailClick={this.handleThumbnailClick}
        isLoading={this.state.isLoading} 
        header={this.props.params.city}
        forecastData={this.state.forecastData}/>
    )
  }
}

FiveDayForecastContainer.contextTypes = {
  router: React.PropTypes.object
};

export default FiveDayForecastContainer;