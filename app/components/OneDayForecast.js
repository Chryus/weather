import React from 'react'
import Forecast from './Forecast'

function OneDayForecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    )
  }
  const forecastList = props.forecastData['data']['list'];

  const icons = forecastList.map((obj) =>
    <ImageThumbnail forecast={obj}/> 
  );
  return (
    <div>
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg space">
        <h1>{props.header}</h1>
      </div>
      <div>
        <div className="container">
          <div className="row">
            {icons}
          </div> 
        </div>
      </div>
    </div>
  )
}