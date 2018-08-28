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
      distanceSelected: '26.219'
    }
  }

  handleTimeSelectorChange = (event) => {
    this.setState({timeSelectorOption: event.target.value});
  }

  handleDistanceChange = (event) => {
    this.setState({distanceSelected: event.target.value});
  }

  render() {
    const {timeSelectorOption} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Race Calculator</h1>
        </header>

        <form>
          <Distance onDistanceChange={this.handleDistanceChange}/>
          <TimeSelector timeSelectorOption={timeSelectorOption} onTimeSelectorChange={this.handleTimeSelectorChange}/>
          {timeSelectorOption === 'runningPace' ? <RunningPace/> : <RunningTime/>}
          <MeasureUnits/>

          <div>
            <button type="button" id="calculate-button">Calculate</button>
            <button type="reset" id="reset-button">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
