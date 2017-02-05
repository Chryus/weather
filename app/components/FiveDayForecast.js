import React from 'react'
import Loading from './Loading'
import ImageThumbnail from './ImageThumbnail'
const PropTypes = React.PropTypes

function FiveDayForecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    )
  }
  const forecastList = props.forecastData.data.list;

  const icons = forecastList.map((obj, index) =>
    <div data={index} key={index} className="col-xs-6 col-md-3" onClick={props.onThumbnailClick}>
      <ImageThumbnail forecastData={obj} />
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

FiveDayForecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  onThumbnailClick: PropTypes.func.isRequired
}


export default FiveDayForecast;  
