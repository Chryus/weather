import React from 'react'
import OneDayForecast from '../components/OneDayForecast'

class OneDayForecastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      forecastData: {}
    };
  }

  componentDidMount() {
    console.log(JSON.parse(this.props.location.query.forecastData))
    this.setState({
      isLoading: false,
      forecastData: JSON.parse(this.props.location.query.forecastData)
    });
  }

  render() {
    return (
      <OneDayForecast
        timestamp={this.props.location.query.timestamp}
        isLoading={this.state.isLoading} 
        header={_.capitalize(this.props.params.city)}
        forecastData={this.state.forecastData}/>
    );
  }
}

export default OneDayForecastContainer;