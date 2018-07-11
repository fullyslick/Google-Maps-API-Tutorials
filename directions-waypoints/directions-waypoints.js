// 1. First load the Google API Library.
// To use specific API add it to :: https://console.cloud.google.com
(function loadScript() {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  // 2. The last parameters defines the method to be executed when script loads, in this case initMap()
  // So when script loads execute initMap()
  script.src = 'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyA8Zg1KCtmv_PZCsR_BhgIYmV4sep78eyw&v=3&callback=initMap';

  // Fire the loading, by adding the script to meta <head>
  head.appendChild(script);
}());

// First Create the map and then calculate the route
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      // The location of the Map
      lat: 41.9027835,
      lng: 12.4963655
    },
    zoom: 8
  });

  calcRoute(map);
}

// https://youtu.be/RRet0qNL58I
// https://developers.google.com/maps/documentation/javascript/directions
// https://developers.google.com/maps/documentation/directions/start
function calcRoute(mapDisplayed) {

  // This object is used to get directions
  var directionsService = new google.maps.DirectionsService();

  // This object is used to render directions
  //
  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: mapDisplayed, // on which map to draw the directions
    draggable: true,
    polylineOptions: { // how to look the directions line
      strokeColor: 'blue'
    }
  });

  var start = 'Florence, Italy';
  var end = 'Milan, Italy';

  // Waypoints (stops)
  waypoints = [
    {
      location: 'Genoa, Italy',
      stopover: true
    },
    {
      location: 'Bologna, Italy',
      stopover: true
    },
    {
      location: 'Venice, Italy',
      stopover: true
    }
  ]

  var request = {
    origin: start,
    destination: end,
    waypoints: waypoints,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      // Set directions to display the route
      directionsDisplay.setDirections(result);
    }
  });
}
