export const milesToKm = (miles) => {
  return (miles * 1.609344).toFixed(2);
}

export const getRunningTime = (distance, runningPace) => {
  return distance * runningPace;
}

export const getRunningPace = (distance, runningTime) => {
  return runningTime/distance;
}

export const getDistance = (measureUnit, distanceInMiles) => {
  let distance = (measureUnit === 'mi') ? Number(distanceInMiles) : milesToKm(distanceInMiles);
  
  return distance;
}