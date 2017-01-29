import React from 'react'
import Prompt from '../components/Prompt'
import Nav from '../components/Nav'

class PromptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.originalLocation = 'Chicago'
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this);
    this.handleSubmitLocation = this.handleSubmitLocation.bind(this);
    this.state = { 
      location: this.originalLocation,
    };
  }

  handleUpdateLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSubmitLocation(event) {
    event.preventDefault();
    this.context.router.push({
      pathname: '/forecast/' + this.state.location
    });
  }

  render() {
    return (
      <div>
        <Nav
          onUpdateLocation={this.handleUpdateLocation}
          onSubmitLocation={this.handleSubmitLocation}
          location={this.state.location}
        />
        <Prompt 
          header="Enter a City and State"
          onUpdateLocation={this.handleUpdateLocation}
          onSubmitLocation={this.handleSubmitLocation}
          location={this.state.location} />
      </div>
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object
};

export default PromptContainer