import React, { Component } from 'react';
import Distance from './Distance.js';
import RunningPace from './RunningPace.js';
import RunningTime from './RunningTime.js';
import MeasureUnits from './MeasureUnits.js';
import TimeFormat from './TimeFormat.js';
import * as Calculator from '../Calculator.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeFormatProvided: 'runningPace',
      distanceSelected: '26.219', //in miles
      measureUnitsSelected: 'miles',
      runningPace: 0,
      runningTime: 0
    }
  }

  handleDistanceChange = (event) => {
    this.setState({distanceSelected: event.target.value});
  }

  handleTimeFormatChange = (event) => {
    this.setState({timeFormatProvided: event.target.value});
  }

  handleMeasureUnitsChange = (event) => {
    this.setState({measureUnitsSelected: event.target.value});
  }

  handleRunningPaceChange = (time) => {
    this.setState({runningPace: time});
  }

  handleRunningTimeChange = (time) => {
    this.setState({runningTime: time});
  }

  handleCalculateClick = () => {
    const {distanceSelected, measureUnitsSelected, timeFormatProvided, runningPace, runningTime} = this.state;
    let distance = (measureUnitsSelected === 'miles') ? distanceSelected : Calculator.milesToKm(distanceSelected);
    if (timeFormatProvided === 'runningPace') {
      let time = Calculator.getRunningTime(distance, runningPace);
      this.setState({runningTime: time});
    } else {
      let time = Calculator.getRunningPace(distance, runningTime);
      this.setState({runningPace: time});
    }
  }

  render() {
    const {timeFormatProvided, measureUnitsSelected} = this.state;
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Race Calculator</h1>
        </header>

        <form>
          <Distance onDistanceChange={this.handleDistanceChange}/>
          <TimeFormat timeFormatProvided={timeFormatProvided} onTimeFormatChange={this.handleTimeFormatChange}/>
          {timeFormatProvided === 'runningPace' ? <RunningPace onRunningPaceChange={this.handleRunningPaceChange}/> : <RunningTime onRunningTimeChange={this.handleRunningTimeChange}/>}
          <MeasureUnits measureUnitsSelected={measureUnitsSelected} onMeasureUnitsChange={this.handleMeasureUnitsChange}/>

          <button type="button" id="calculate-button" onClick={this.handleCalculateClick}>Calculate</button>
        </form>
      </div>
    );
  }
}

export default App;
