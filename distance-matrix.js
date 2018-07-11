// 1. First load the Google API Library.
// To use specific API add it to :: https://console.cloud.google.com
(function loadScript() {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  // 2. The last parameters defines the method to be executed when script loads, in this case callDistabnceApi()
  // So when script loads execute callDistabnceApi()
  script.src = 'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw&v=3&callback=callDistabnceApi';

  // Fire the loading, by adding the script to meta <head>
  head.appendChild(script);
}());

function callDistabnceApi(){

// Store the parameters for the request in variables.
var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.421150);

// Create new DistanceMatrixService object to make a request
var service = new google.maps.DistanceMatrixService();

// Define parameters for the request as described here:
// https://developers.google.com/maps/documentation/javascript/distancematrix
service.getDistanceMatrix(
  {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: 'DRIVING',
    // transitOptions: TransitOptions, optional
    // drivingOptions: DrivingOptions, optianal
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  }, makeReuqestToDistanceAPI); // then call request

function makeReuqestToDistanceAPI(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      window.alert('Error was: ' + status);
    } else {
      // Log the response from API
      console.log(response);
    }
 }
}
