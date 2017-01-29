import React from 'react'
import Loading from './Loading'
const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Forecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    )
  }
  const list = props.forecastData['data']['list']
  const icons = list.map((obj) =>
    <div className="col-xs-6 col-md-3">
      <a href="#" className="thumbnail">
        <img src={"http://openweathermap.org/img/w/" + obj['weather'][0]['icon'] + ".png"} height="100" width="100"/>
      </a>
    </div>
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

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
}


export default Forecast;  
