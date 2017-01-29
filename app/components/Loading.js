import React from 'react'
import loading from '../styles/loading.css'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.originalText = "Loading";
    this.state = {
      text: "Loading",
      speed: 300
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.state.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading-container">
        <p className="content">{this.state.text}</p>
      </div>
    );
  }
} 

export default Loading;