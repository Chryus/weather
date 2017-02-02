import React from 'react'
import Nav from '../components/Nav'
import EventHelpers from '../utils/EventHelpers'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateLocation = EventHelpers.handleUpdateLocation.bind(this);
    this.handleSubmitLocation = EventHelpers.handleSubmitLocation.bind(this);
    this.state = { 
      location: EventHelpers.originalLocation,
    };
  }

  render() {
    return (
      <div>
        <Nav 
          onUpdateLocation={this.handleUpdateLocation}
          onSubmitLocation={this.handleSubmitLocation}
          location={this.state.location} />
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer