import React from 'react'
import FiveDayForecast from './FiveDayForecast'
import Loading from './Loading'

const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function OneDayForecast(props) {
  return puke(props.forecastData)
}

OneDayForecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
}


export default OneDayForecast; 