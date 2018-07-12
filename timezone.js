// https://youtu.be/EkL_8Ay5hvQ
// https://developers.google.com/maps/documentation/timezone/start
// https://developers.google.com/maps/documentation/timezone/intro
function showCoordinates(coordinates, date){

  var date = new Date("04/12/2016"); // some mock date
  var milliseconds = date.getTime() / 1000;

  // Holds the key to use Google geocoding API:
  const key = `AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw`;

  // Create the url for the request
  const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates}&timestamp=${milliseconds}&key=${key}`


  // Make reuqest to Google geocoding API
  fetch(url).then(response => response.json())
  .then(output => (console.log(output)));

}

// Execute function


showCoordinates('51.5073509,-0.1277582999', "04/01/2016");
