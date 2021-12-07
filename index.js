const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '43.8770', longitude: '-79.2262' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});