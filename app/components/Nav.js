import React from 'react'
import nav from '../styles/nav.css'
const PropTypes = React.PropTypes

function Nav(props) {
  return (
    <div>
      <nav className="nav navbar-default">
        <div className="container-fluid">
          <form className="navbar-form navbar-right" role="search" onSubmit={props.onSubmitLocation}>
            <div className="form-group">
            <input 
              type="text"
              value={props.location}
              className="form-control" 
              placeholder={props.location} 
              onChange={props.onUpdateLocation}>
            </input>
            </div>
            <button type="submit" className="btn btn-default btn-success">Submit</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

Nav.propTypes = {
  onUpdateLocation: PropTypes.func.isRequired,
  onSubmitLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

export default Nav;