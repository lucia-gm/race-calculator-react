import React, { Component } from 'react';

class RunningPace extends Component {
  constructor() {
    super() 
    this.state = {
      min: 420,
      sec: 0
    }
  }

  createMinOptions = () => {
    let minOptions = [];
    for (let i = 0; i < 31; i++) {
      minOptions.push(<option key={i} value={i*60}>{`${i} min`}</option>);
    }

    return minOptions;
  }

  createSecOptions = () => {
    let secOptions = [];
    for (let i = 0; i < 60; i++) {
      secOptions.push(<option key={i} value={i}>{`${i} sec`}</option>);
    }

    return secOptions;
  }

  handleTimeChange = (event) => {
    let newValue = Number(event.target.value);
    let time;

    if (event.target.className ==='min') {
      time= newValue + this.state.sec;
      this.setState({min: newValue});
    } else {
      time= newValue + this.state.min;
      this.setState({sec: newValue});
    }
    
    this.props.onRunningPaceChange(time);
  }

  render() {
    let defaultMin = (this.props.runningPace !== 420) ? 0 : this.state.min;
    return (
      <fieldset className="form-time">
        <select className="min" onChange={this.handleTimeChange} defaultValue={defaultMin}>
          {this.createMinOptions()}
        </select>

        <select className="sec" onChange={this.handleTimeChange} defaultValue={this.state.sec}>
          {this.createSecOptions()}
        </select>
      </fieldset>
    );
  }
}

export default RunningPace;