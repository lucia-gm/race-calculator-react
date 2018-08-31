import React, { Component } from 'react';

class RunningPace extends Component {
  constructor() {
    super() 
    this.state = {
      min: 0,
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
    return (
      <fieldset>
        <select className="min" onChange={this.handleTimeChange}>
          {this.createMinOptions()}
        </select>

        <select className="sec" onChange={this.handleTimeChange}>
          {this.createSecOptions()}
        </select>
      </fieldset>
    );
  }
}

export default RunningPace;