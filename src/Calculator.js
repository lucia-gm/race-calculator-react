export const milesToKm = (miles) => {
  return miles * 1.609344;
}

export const getRunningTime = (distance, runningPace) => {
  return distance * runningPace;
}

export const getRunningPace = (distance, runningTime) => {
  return runningTime/distance;
}