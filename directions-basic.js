// 1. First load the Google API Library.
// To use specific API add it to :: https://console.cloud.google.com
(function loadScript() {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  // 2. The last parameters defines the method to be executed when script loads, in this case calcRoute()
  // So when script loads execute calcRoute()
  script.src = 'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw&v=3&callback=calcRoute';

  // Fire the loading, by adding the script to meta <head>
  head.appendChild(script);
}());


// https://youtu.be/RRet0qNL58I
// https://developers.google.com/maps/documentation/javascript/directions
// https://developers.google.com/maps/documentation/directions/start
function calcRoute() {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  var start = 'Varna, Bulgaria';
  var end = 'Ruse, Bulgaria';
  
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      // display the whole response
      console.log(result);
      // display the distance and duration
      console.log(result.routes[0].legs[0].distance.text + " for " + result.routes[0].legs[0].duration.text );
    }
  });
}
