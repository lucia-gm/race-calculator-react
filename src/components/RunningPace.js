import React, { Component } from 'react';

class RunningPace extends Component {
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

  render() {
    return (
      <fieldset>
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

export default RunningPace;