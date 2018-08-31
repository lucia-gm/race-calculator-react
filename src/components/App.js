import React, { Component } from 'react';
import Distance from './Distance.js';
import RunningPace from './RunningPace.js';
import RunningTime from './RunningTime.js';
import MeasureUnits from './MeasureUnits.js';
import TimeSelector from './TimeSelector.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeSelectorOption: 'runningPace',
      distanceSelected: '26.219',
      measureUnitsSelected: 'miles',
      runningPace: 0,
      runningTime: 0
    }
  }

  handleDistanceChange = (event) => {
    this.setState({distanceSelected: event.target.value});
  }

  handleTimeSelectorChange = (event) => {
    this.setState({timeSelectorOption: event.target.value});
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

  render() {
    const {timeSelectorOption, measureUnitsSelected} = this.state;
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Race Calculator</h1>
        </header>

        <form>
          <Distance onDistanceChange={this.handleDistanceChange}/>
          <TimeSelector timeSelectorOption={timeSelectorOption} onTimeSelectorChange={this.handleTimeSelectorChange}/>
          {timeSelectorOption === 'runningPace' ? <RunningPace onRunningPaceChange={this.handleRunningPaceChange}/> : <RunningTime onRunningTimeChange={this.handleRunningTimeChange}/>}
          <MeasureUnits measureUnitsSelected={measureUnitsSelected} onMeasureUnitsChange={this.handleMeasureUnitsChange}/>

          <button type="button" id="calculate-button">Calculate</button>
        </form>
      </div>
    );
  }
}

export default App;
