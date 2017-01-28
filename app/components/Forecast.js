import React from 'react'
const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Forecast(props) {
  const list = props.cityForecastData['data']['list']
  const icons = list.map((obj) =>
    <img src={"http://openweathermap.org/img/w/" + obj['weather'][0]['icon'] + ".png"} height="100" width="100"/>
  );
  return (
    <div> {icons} </div>
  )
}

Forecast.propTypes = {
  header: PropTypes.string.isRequired,
  cityForecastData: PropTypes.object.isRequired
}


export default Forecast;  
