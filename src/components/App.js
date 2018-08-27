import React, { Component } from 'react';
import Distance from './Distance.js';
import RunningPace from './RunningPace.js';
import RunningTime from './RunningTime.js';
import MeasureUnits from './MeasureUnits.js';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Race Calculator</h1>
        </header>

        <form>
          <Distance/>
          <RunningPace/>
          <RunningTime/>
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
