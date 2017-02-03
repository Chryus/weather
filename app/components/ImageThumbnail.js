import React from 'react'
import { Link } from 'react-router'

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

export default ImageThumbnail;