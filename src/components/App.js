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
    const {timeFormatProvided, measureUnitsSelected} = this.state;
    let distanceInMiles = event.target.value,
        distance = Calculator.getDistance(measureUnitsSelected, distanceInMiles);
    
    if(timeFormatProvided === 'runningTime') {
      this.updateRunningPace(distance);
    }

    this.setState({distanceSelected: distanceInMiles,
                   distance: distance
                  });
  }

  handleTimeFormatChange = (event) => {
    this.setState({timeFormatProvided: event.target.value});
  }

  handleMeasureUnitsChange = (event) => {
    const {timeFormatProvided, distanceSelected} = this.state;

    let measureUnits = event.target.value,
        distance = Calculator.getDistance(measureUnits, distanceSelected);

    if(timeFormatProvided === 'runningTime') {
      this.updateRunningPace(distance);
    }

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

  updateRunningPace = (distance) => {
    let runningPace = Calculator.getRunningPace(distance, this.state.runningTime);
    this.setState({runningPace: runningPace});
    } 

  render() {
    const {timeFormatProvided, measureUnitsSelected, runningPace} = this.state;
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
            {timeFormatProvided === 'runningPace' ? <RunningPace onRunningPaceChange={this.handleRunningPaceChange} runningPace={runningPace}/> : <RunningTime onRunningTimeChange={this.handleRunningTimeChange}/>}
            <MeasureUnits measureUnitsSelected={measureUnitsSelected} onMeasureUnitsChange={this.handleMeasureUnitsChange}/>
          </form>

          <Table data={this.state}/>
        </main>
      </div>
    );
  }
}

export default App;
