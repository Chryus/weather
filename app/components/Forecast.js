import React from 'react'
const PropTypes = React.PropTypes

function Forecast(props) {
  return (
    <div>
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg space">
        <h1>{props.header}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png" alt="..." height="100" width="100"/>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png" alt="..." height="100" width="100"/>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png" alt="..." height="100" width="100"/>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png" alt="..." height="100" width="100"/>
            </a>
          </div>
          <div className="col-xs-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="http://icons.iconarchive.com/icons/custom-icon-design/weather/256/Sunny-icon.png" alt="..." height="100" width="100"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Forecast.propTypes = {
}

export default Forecast;  

