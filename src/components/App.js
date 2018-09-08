import React, { Component } from 'react';
import Distance from './Distance.js';
import RunningPace from './RunningPace.js';
import RunningTime from './RunningTime.js';
import MeasureUnits from './MeasureUnits.js';
import TimeFormat from './TimeFormat.js';
import Table from './Table.js';
import * as Calculator from '../Calculator.js';
import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeFormatProvided: 'runningPace',
      distanceSelected: '26.219', //in miles
      measureUnitsSelected: 'mi',
      runningPace: 420,
      runningTime: 0,
      distance: 26.219,
    }
  }

  handleDistanceChange = (event) => {
    let distanceInMiles = event.target.value,
        distance = Calculator.getDistance(this.state.measureUnitsSelected, distanceInMiles);
    this.setState({distanceSelected: distanceInMiles,
                   distance: distance
                  });
  }

  handleTimeFormatChange = (event) => {
    this.setState({timeFormatProvided: event.target.value});
  }

  handleMeasureUnitsChange = (event) => {
    let measureUnits = event.target.value,
        distance = Calculator.getDistance(measureUnits, this.state.distanceSelected);

    this.setState({measureUnitsSelected: measureUnits,  
                   distance: distance
                  });
  }

  handleRunningPaceChange = (time) => {
    let runningTime = Calculator.getRunningTime(this.state.distance, time);

    this.setState({runningTime: runningTime,
                   runningPace: time
                  });
  }

  handleRunningTimeChange = (time) => {
    let runningPace = Calculator.getRunningPace(this.state.distance, time);

    this.setState({runningPace: runningPace,
                   runningTime: time
                  });
  }

  render() {
    const {timeFormatProvided, measureUnitsSelected} = this.state;
    console.log(this.state)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Race Calculator</h1>
        </header>
        <main className="App-body">
          <form>
            <Distance onDistanceChange={this.handleDistanceChange}/>
            <TimeFormat timeFormatProvided={timeFormatProvided} onTimeFormatChange={this.handleTimeFormatChange}/>
            {timeFormatProvided === 'runningPace' ? <RunningPace onRunningPaceChange={this.handleRunningPaceChange}/> : <RunningTime onRunningTimeChange={this.handleRunningTimeChange}/>}
            <MeasureUnits measureUnitsSelected={measureUnitsSelected} onMeasureUnitsChange={this.handleMeasureUnitsChange}/>
          </form>

          <Table data={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
