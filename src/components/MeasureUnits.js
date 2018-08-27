import React, { Component } from 'react';

class MeasureUnits extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      selectedOption: 'miles'
    }
  }

  handleMeasureUnitsChange = (event) => {
    this.setState({selectedOption: event.target.value});
  }

  render() {
    const {selectedOption} = this.state;
    
    return (
      <fieldset>
        <div>
          <label>
            <input type="radio" value="miles" checked={selectedOption === 'miles'} onChange={this.handleMeasureUnitsChange}/>
            min/mi
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="km" checked={selectedOption === 'km'} onChange={this.handleMeasureUnitsChange}/>
            min/km
          </label>
        </div>
      </fieldset>
    );
  }
}

export default MeasureUnits;