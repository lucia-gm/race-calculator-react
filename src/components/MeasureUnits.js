import React from 'react';

const MeasureUnits = (props) => (
  <fieldset>
    <div>
      <label>
        <input type="radio" value="miles" checked={props.measureUnitsSelected === 'miles'} onChange={props.onMeasureUnitsChange}/>
        min/mi
      </label>
    </div>
    <div>
      <label>
        <input type="radio" value="km" checked={props.measureUnitsSelected === 'km'} onChange={props.onMeasureUnitsChange}/>
        min/km
      </label>
    </div>
  </fieldset>
);

export default MeasureUnits;