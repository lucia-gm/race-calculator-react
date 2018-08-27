import React, { Component } from 'react';
import Distance from './Distance.js';
import PaceTime from './PaceTime.js';
import RunningTime from './RunningTime.js';
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
          <PaceTime/>
          <RunningTime/>
        </form>
      </div>
    );
  }
}

export default App;
