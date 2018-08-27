import React, { Component } from 'react';

class Distance extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      selectedOption: '26.219'
    }
  }

  handleDistanceChange = (event) => {
    this.setState({selectedOption: event.target.value});
  }

  render() {
    const {selectedOption} = this.state

    return (
      <fieldset>
        <legend>Distance</legend>
        <div>
          <label>
            <input type="radio" id="marathon" value="26.219" checked={selectedOption === '26.219'} onChange={this.handleDistanceChange}/>
            Marathon
          </label>
        </div>
        <div>
          <label>
            <input type="radio" id="half-marathon" value="13.1094" checked={selectedOption === '13.1094'} onChange={this.handleDistanceChange}/>
            Half-Marathon</label>
        </div>
        <div>
          <label>
            <input type="radio" id="15K" value="9.3206" checked={selectedOption === '9.3206'} onChange={this.handleDistanceChange}/>
            15K</label>
        </div>
        <div>
          <label>
            <input type="radio" id="10K" value="6.2137" checked={selectedOption === '6.2137'} onChange={this.handleDistanceChange}/>
            10K</label>
        </div>
        <div>
          <label>
            <input type="radio" id="5K" value="3.1069" checked={selectedOption === '3.1069'} onChange={this.handleDistanceChange}/>
            5K</label>
        </div>
      </fieldset>
    );
  }
}

export default Distance;