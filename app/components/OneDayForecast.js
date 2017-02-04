import React from 'react'
import FiveDayForecast from './FiveDayForecast'
import Loading from './Loading'
import ImageThumbnail from './ImageThumbnail'

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

  const forecastList = props.forecastData.data.list[0];

  return (
    <div>
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg space">
        <h1>{props.header}</h1>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <ImageThumbnail 
              forecast={forecastList}/> 
          </div>
             <ul>
                <li>{props.forecastData.data.city.name}</li>
                <li>{_.capitalize(forecastList.weather[0].description)}</li>
                <li>High: {forecastList.temp.max}</li>
                <li>Low: {forecastList.temp.min}</li>
                <li>Humidity: {forecastList.humidity}%</li>
              </ul>
        </div>
      </div>
    </div>
  )
}

OneDayForecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
}


export default OneDayForecast; 