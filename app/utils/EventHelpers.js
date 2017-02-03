import React from 'react'
import { browserHistory } from 'react-router';

module.exports = ({
  originalLocation: 'Chicago',

  handleUpdateLocation: function(event) {
    this.setState({
      location: event.target.value
    });
  },

  handleSubmitLocation: function(event) {
    event.preventDefault();
    browserHistory.push('/forecast/' + _.lowerFirst(this.state.location));
  }
});