import React from 'react';

const TimeSelector = (props) => (
  <fieldset>
    <div>
      <label>
        <input type="radio" value="runningPace" checked={props.timeSelectorOption === 'runningPace'} onChange={props.onTimeSelectorChange}/>
        Running Pace
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value="runningTime" checked={props.timeSelectorOption === 'runningTime'} onChange={props.onTimeSelectorChange}/>
        Running Time
      </label>
    </div>
  </fieldset>
);

export default TimeSelector;