import React, { Component } from 'react';

class RunningTime extends Component {
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

  render() {
    return (
      <fieldset>
        <select className="hour">
          {this.createHourOptions()}
        </select>

        <select className="min">
          {this.createMinOptions()}
        </select>

        <select className="sec">
          {this.createSecOptions()}
        </select>
      </fieldset>
    );
  }
}

export default RunningTime;