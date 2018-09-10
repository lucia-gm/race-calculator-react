import React from 'react';

const Distance = (props) => (
  <fieldset className="form-distance">
    <legend>Select a distance:</legend>
    <select onChange={props.onDistanceChange}>
      <option race="Marathon" id="marathon" value="26.219">Marathon</option>
      <option id="half-marathon" value="13.1094">Half-Marathon</option>
      <option id="15K" value="9.3206">15K</option>
      <option id="10K" value="6.2137">10K</option>
      <option id="5K" value="3.1069">5K</option>
    </select>
  </fieldset>
);

export default Distance;