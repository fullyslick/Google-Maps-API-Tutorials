// https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding
// 1. Insert coordinates
// 2. Output address

function showCoordinates(coordinates){

  // Holds the key to use Google geocoding API:
  const key = `AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw`;

  // Create the url for the request
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&key=${key}`

  // Make reuqest to Google geocoding API
  fetch(url).then(response => response.json())
  .then(output => ((output.status === "OK") && output.results ))
  .then(results => console.log(results[0].formatted_address));
}

// Execute function
showCoordinates('33.1262476,-117.3115765');
