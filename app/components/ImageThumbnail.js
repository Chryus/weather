import React from 'react'
import { Link } from 'react-router'
const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function FormattedDate(props) {
  let options = { weekday: 'long', month: 'short', day: 'numeric' };
  let date = new Date(props.timestamp * 1000);
  return <h2 className='forecast-header text-center bottom-space'>{date.toLocaleString('en-US', options)}</h2>
}

function ImageThumbnail(props) {
  return (
    <div>
      <Link className="thumbnail">
        <img 
          src={"http://openweathermap.org/img/w/" + props.forecastData.weather[0].icon + ".png"} 
          height="100" 
          width="100"/>
      </Link>
      <FormattedDate timestamp={props.forecastData.dt}/>
    </div>
  )
}

ImageThumbnail.propTypes = {
  forecastData: PropTypes.obj
}

export default ImageThumbnail;