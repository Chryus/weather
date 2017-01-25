import React from 'react'
import nav from '../styles/nav.css'

export default React.createClass({
  render() {
    return (
      <div>
        <nav className="nav navbar-default">
          <div className="container-fluid">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Get Weather"></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
});