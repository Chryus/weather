import React from 'react'
const PropTypes = React.PropTypes

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg space">
      <h1>{props.header}</h1>
      <div className="col-sm-10">
        <div className="col-sm-6 col-sm-offset-4">
          <form onSubmit={props.onSubmitLocation}>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder={props.location}
                type="text"
                onChange={props.onUpdateLocation} 
                value={props.location} />
            </div>
            <div className="form-group col-sm-8 col-sm-offset-2">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

export default Prompt;  

