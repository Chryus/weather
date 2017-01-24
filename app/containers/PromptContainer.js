import React from 'react'

class PromptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.originalLocation = 'Chicago, IL'
    this.state = { location: this.originalLocation};
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
  }

  handleUpdateLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSubmitLocation(event) {
    event.preventDefault();
    
    this.context.router.push({
      pathname: '/forecast',
      query: {
        location: this.state.location
      }
    });
  }

  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.handleSubmitLocation}>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder={this.state.location}
                type="text"
                onChange={this.handleUpdateLocation} 
                value={this.state.location} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


PromptContainer.contextTypes = {
  router: React.PropTypes.object
};

export default PromptContainer