import React, { Component } from 'react';
import * as Calculator from '../Calculator.js';

class Table extends Component {
  createGrid = (pace, paceFaster, paceSlower) => {
    let paceTime = pace,
        pace5Faster = paceFaster,
        pace5Slower = paceSlower,
        tablebody = [];

    for (let i = 1; i < this.props.data.distance; i++) {
      tablebody.push(<tr key={i}>
                        <th>{i}</th>
                        <td>{Calculator.secondsToHms(pace5Slower)}</td>
                        <td>{Calculator.secondsToHms(paceTime)}</td>
                        <td>{Calculator.secondsToHms(pace5Faster)}</td>
                      </tr>);
      paceTime += pace;
      pace5Faster += paceFaster;
      pace5Slower += paceSlower;
    }

    return tablebody;
  }

  render() {
    const {data} = this.props;
    let unit = data.measureUnitsSelected,
        distance = data.distance,
        pace = data.runningPace,
        paceSlower = pace - 5,
        paceFaster = pace + 5;

    return (
      <table> 
        <thead>
          <tr>
            <th>Distance ({unit})</th>
            <th>{Calculator.secondsToHms(paceSlower)}/{unit}</th>
            <th>{Calculator.secondsToHms(pace)}/{unit}</th>
            <th>{Calculator.secondsToHms(paceFaster)}/{unit}</th>
          </tr>
        </thead>

        <tbody>
          {this.createGrid(pace, paceFaster, paceSlower)}

          <tr key="last">
            <th>{distance}</th>
            <td>{Calculator.secondsToHms(Calculator.getRunningTime(paceSlower, distance))}</td>
            <td>{Calculator.secondsToHms(Calculator.getRunningTime(pace, distance))}</td>
            <td>{Calculator.secondsToHms(Calculator.getRunningTime(paceFaster, distance))}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table;