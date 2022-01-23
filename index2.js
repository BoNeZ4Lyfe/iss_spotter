// index2.js

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation, printPassTimes } = require('./iss.promised');


fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })