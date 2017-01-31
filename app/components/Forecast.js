import React from 'react'
import Loading from './Loading'
import { Link } from 'react-router'
import moment from 'moment'
const PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function FormattedDate(props) {
  let options = { weekday: 'long', month: 'short', day: 'numeric' };
  let date = new Date(props['timestamp'] * 1000);
  return <h2 className='text-center'>{date.toLocaleString('en-US', options)}</h2>
}

function ImageThumbnail(props) {
  let ts = props['forecast']['dt']
  return (
    <div className="col-xs-6 col-md-3">
    <Link to='/'  className="thumbnail">
      <img src={"http://openweathermap.org/img/w/" + props['forecast']['weather'][0]['icon'] + ".png"} key={props['forecast']['dt'].toString()} height="100" width="100"/>
    </Link>
    <p>{props['forecast']['dt']}</p>
    <FormattedDate timestamp={ts}/>
  </div>
  )
}


function Forecast(props) {
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

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
}


export default Forecast;  
