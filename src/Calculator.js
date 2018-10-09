export const milesToKm = (miles) => {
  return (miles * 1.609344).toFixed(3);
}

export const getRunningTime = (distance, runningPace) => {
  return distance * runningPace;
}

export const getRunningPace = (distance, runningTime) => {
  return runningTime/distance;
}

export const getDistance = (measureUnit, distanceInMiles) => {
  let distance = (measureUnit === 'mi') ? distanceInMiles : milesToKm(distanceInMiles);
  
  return Number(distance);
}

// Function inspired by https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
export const secondsToHms = (d) => {
  d = Number(d);

  if(d < 0) {
    return '00:00';
  } else {
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h === 0 ? '' : (h < 10 ? `0${h}:` : `${h}:`);
    let mDisplay = m < 10 ? `0${m}:` : `${m}:`;
    let sDisplay = s < 10 ? `0${s}` : `${s}`;  

    return hDisplay + mDisplay + sDisplay;
  }
}