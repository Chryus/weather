import React from 'react'
import Loading from './Loading'
import { Link } from 'react-router'
const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function FormattedDate(props) {
  let options = { weekday: 'long', month: 'short', day: 'numeric' };
  let date = new Date(props['timestamp'] * 1000);
  return <h2 data={props.timestamp} className='text-center'>{date.toLocaleString('en-US', options)}</h2>
}

function ImageThumbnail(props) {
  let ts = props['forecast']['dt']
  return (
    <div className="col-xs-6 col-md-3" onClick={props.onThumbnailClick}>
      <Link className="thumbnail">
        <img 
          src={"http://openweathermap.org/img/w/" + props['forecast']['weather'][0]['icon'] + ".png"} 
          key={ts}
          data={ts}
          height="100" 
          width="100"/>
      </Link>
      <FormattedDate timestamp={ts}/>
    </div>
  )
}


function FiveDayForecast(props) {
  if (props.isLoading === true) {
    return (
      <Loading/>
    )
  }
  const forecastList = props.forecastData['data']['list'];

  const icons = forecastList.map((obj) =>
    <ImageThumbnail onThumbnailClick={props.onThumbnailClick} forecast={obj}/> 
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
