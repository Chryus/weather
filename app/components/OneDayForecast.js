import React from 'react'
import FiveDayForecast from './FiveDayForecast'
import Loading from './Loading'
import ImageThumbnail from './ImageThumbnail'
import forecast from '../styles/forecast.css'

const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function OneDayForecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    )
  }

  return (
    <div>
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
        <ImageThumbnail forecastData={props.forecastData}/>
        <div className="col-sm-10">
          <div className="col-sm-6 col-sm-offset-4">
           <ul className="list-unstyled bottom-space">
              <li>{props.header}</li>
              <li>{props.forecastData.weather[0].description}</li>
              <li>high: {Math.round(props.forecastData.temp.max)}</li>
              <li>low: {Math.round(props.forecastData.temp.min)}</li>
              <li>humidity: {props.forecastData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

OneDayForecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
}


export default OneDayForecast; 