import React, { Component } from 'react';
import * as Calculator from '../Calculator.js';

class Table extends Component {
  createRows = (lastRow, unit, pace) => {
    let tableBody = [],
        paceTime = pace,
        pace5Slower = pace - 5,
        pace5Faster = pace + 5;
    
    for (let i = 1; i <= lastRow; i++) {
      let rowInfo = (unit === 'mi') ? this.getMiValues(i) : this.getKmValues(i); 
      tableBody.push(<tr key={i} className={(typeof(rowInfo.name)=== 'string') ? 'highlighted-row' : ''}>
                      <td>{rowInfo.name}</td>
                      <td>{Calculator.secondsToHms(rowInfo.value * pace5Slower)}</td>
                      <td className='highlighted-col'>{Calculator.secondsToHms(rowInfo.value * paceTime)}</td>
                      <td>{Calculator.secondsToHms(rowInfo.value * pace5Faster)}</td>
                     </tr>);
    }

    return tableBody;
  }

  getMiValues = (row) => {
    switch (row) {
      case 4: 
        return {
          name: '5K',
          value: 3.1069,
        };
      
      case 8:
        return {
          name: '10K',
          value: 6.2137,
        };

      case 12: 
        return {
          name: '15K',
          value: 9.3206,
        };

      case 17: 
        return {
          name: '1/2 Marathon',
          value: 13.1094,
        };

      case 31:
        return {
          name: 'Marathon',
          value: 26.219,
        }
    
      default:
        if(4 < row  && row < 8 ) {
          return {
            name: row - 1,
            value: row - 1,
          };
        } else if (8 < row && row < 12) {
          return {
            name: row - 2,
            value: row - 2,
          };    
        } else if (12 < row && row < 17) {
          return {
            name: row - 3,
            value: row - 3,
          };
        } else if (17 < row && row < 31) {
          return {
            name: row - 4,
            value: row - 4,
          };
        } else {
          return {
            name: row,
            value: row,
          };
        }
    }
  }

  getKmValues = (row) => {
    switch (row) {
      case 5:
        return {
          name: '5K',
          value: 5,
        };

      case 10: 
        return {
          name: '10K',
          value: 10,        
        };

      case 15: 
        return {
          name: '15K',
          value: 15,
        };

      case 22:
        return {
          name: '1/2 Marathon',
          value: 21.0975,
        };

      case 44: 
        return {
          name: 'Marathon',
          value: 42.195,
        };
    
      default:
        if (row > 22) {
          return {
            name: row-1,
            value: row-1,
          };
        } else {
          return {
            name: row,
            value: row,
          };
        }
    }
  }



  render() {
    const {data} = this.props;
    let unit = data.measureUnitsSelected,
        distance = data.distance,
        pace = data.runningPace,
        paceSlower = pace - 5,
        paceFaster = pace + 5;
    
    const raceList = [
      {km: {value: 5, row: 5}, mi: {value: 3.1069, row: 4}},
      {km: {value: 10, row: 10}, mi: {value: 6.2137, row: 8}},
      {km: {value: 15, row: 15}, mi: {value: 9.3206, row: 12}},
      {km: {value: 21.098, row: 22}, mi: {value: 13.1094, row: 17}},
      {km: {value: 42.195, row: 44}, mi: {value: 26.219, row: 31}},
    ]

    let lastRow = (unit === 'mi') ? raceList.find(el => el.mi.value === distance).mi.row : raceList.find(el => el.km.value === distance).km.row;

    return (
      <table> 
        <thead>
          <tr className="table-heading">
            <th>Distance ({unit})</th>
            <th>{Calculator.secondsToHms(paceSlower)}/{unit}</th>
            <th>{Calculator.secondsToHms(pace)}/{unit}</th>
            <th>{Calculator.secondsToHms(paceFaster)}/{unit}</th>
          </tr>
        </thead>

        <tbody>
          {this.createRows(lastRow, unit, pace)}
        </tbody>
      </table>
    )
  }
}

export default Table;