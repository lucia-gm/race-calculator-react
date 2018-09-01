import React from 'react';

const TimeFormat = (props) => (
  <fieldset>
    <div>
      <label>
        <input type="radio" value="runningPace" checked={props.timeFormatProvided === 'runningPace'} onChange={props.onTimeFormatChange}/>
        Running Pace
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value="runningTime" checked={props.timeFormatProvided === 'runningTime'} onChange={props.onTimeFormatChange}/>
        Running Time
      </label>
    </div>
  </fieldset>
);

export default TimeFormat;