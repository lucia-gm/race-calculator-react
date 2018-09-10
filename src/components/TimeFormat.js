import React from 'react';

const TimeFormat = (props) => (
  <fieldset className="form-timeFormat">
    <div>
      <label>
        <input type="radio" value="runningPace" checked={props.timeFormatProvided === 'runningPace'} onChange={props.onTimeFormatChange}/>
        I want to run at...
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value="runningTime" checked={props.timeFormatProvided === 'runningTime'} onChange={props.onTimeFormatChange}/>
        I want to finish the race in less than...
      </label>
    </div>
  </fieldset>
);

export default TimeFormat;