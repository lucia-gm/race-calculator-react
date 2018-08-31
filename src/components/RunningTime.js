import React, { Component } from 'react';

class RunningTime extends Component {
  constructor() {
    super() 
    this.state = {
      hour: 0,
      min: 0,
      sec: 0
    }
  }

  createHourOptions = () => {
    let hourOptions = [];
  
    for (let i = 0; i < 11; i++) {
      hourOptions.push(<option key={i} value={i*3600}>{`${i} h`}</option>);
    }
    return hourOptions;
  }

  createMinOptions = () => {
    let minOptions = [];
    for (let i = 0; i < 60; i++) {
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

    if (event.target.className ==='hour') {
      time= newValue + this.state.min + this.state.sec;
      this.setState({hour: newValue});
    } else if (event.target.className ==='min'){
      time= newValue + this.state.hour + this.state.sec;
      this.setState({min: newValue});
    } else {
      time= newValue + this.state.hour + this.state.min;
      this.setState({sec: newValue});
    }
    
    this.props.onRunningTimeChange(time);
  }

  render() {
    return (
      <fieldset>
        <select className="hour" onChange={this.handleTimeChange}>
          {this.createHourOptions()}
        </select>

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

export default RunningTime;