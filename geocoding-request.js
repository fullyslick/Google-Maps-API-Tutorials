// https://youtu.be/mMm3Osh-fN8
// https://developers.google.com/maps/documentation/geocoding/intro
// https://developers.google.com/maps/documentation/javascript/geocoding

// 1. Insert address string
// 2. Output location cordinates inside body tag

function showCoordinates(addressString){
  // Replace spaces with "+"
  addressString = addressString.split(' ').join('+');

  // Holds the key to use Google geocoding API:
  const key = `AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw`;

  // Create the url for the request
  const url = `http://maps.googleapis.com/maps/api/geocode/json?address=${addressString}%key=${key}`

  // Make reuqest to Google geocoding API
  fetch(url).then(response => response.json())
  .then(output => ((output.status === "OK") ? output.results : "batak"))
  .then(results => results[0].geometry.location)
  // Show coordinates as string inside body tag
  .then((coordinates) => document.querySelector('body').innerHTML = JSON.stringify(coordinates) );

}

// Execute function
showCoordinates('Ruse, Bulgaria');
