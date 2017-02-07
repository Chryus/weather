import React from 'react'
import Prompt from '../components/Prompt'
import EventHelpers from '../utils/EventHelpers'
import prompt from '../styles/prompt.css'

class PromptContainer extends React.Component {
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
        <Prompt 
          header="Enter a City and State"
          onUpdateLocation={this.handleUpdateLocation}
          onSubmitLocation={this.handleSubmitLocation}
          location={this.state.location} />
      </div>
    );
  }
}

export default PromptContainer