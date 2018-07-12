// 1. First load the Google Places API Library in index.html

// First Create the map and then show places
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {

    center: {
      // The location of the Map
      lat: 43.2140504,
      lng: 27.9147333
    },
    zoom: 15
  });

  // Assign event listener on click of search button
  onClickOfSearch(map);
}

// Assign event listener on click of search button
// Get the input text (the place we are searching for)
// Then call get placeID, passing the map
function onClickOfSearch(map) {

  document.querySelector('#search-place-btn').addEventListener('click', function() {
    // Get the query from input
    let query = document.querySelector('#search-input').value;

    findPlace(map, query);
  });
}

// Find the place searched in the input
// https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
function findPlace(map, query) {

  // Inserted request paramters as described in documentation
  // https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
  var request = {
    location: map.getCenter(),
    radius: '500',
    query: query
  }

  // Create new PlacesService object
  service = new google.maps.places.PlacesService(map);

  // Make request on that object.
  service.textSearch(request, callback);

  // When request is completed display the results.
  function callback(results, status) {
    // If request was successful.
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      displayDetails(results, map);
    }
  }
}

// Display details inside the paragraph.
// As described: https://developers.google.com/maps/documentation/javascript/examples/place-details
// How JSON response look: https://developers.google.com/places/web-service/details#PlaceDetailsResponses
function displayDetails(results, map) {

  // Create <ul> that will be filled with <li>
  var placesHolder = document.createElement('ul');

  // Loop over the results and find their place_id.
  for (var i = 0; i < results.length; i++) {

    // assign each result to a place variable,
    // to make it easier to access its details inside .json
    var place = results[i];

    // Extarct the place_id of every place
    var placeId = place.place_id;

    // create new service to extract the details for every place.
    var service = new google.maps.places.PlacesService(map);

    // extract details for every place
    service.getDetails({
      placeId: placeId
    }, function callback(place, status) {
      // Check if the request was succesfl
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Check if there is name property for that place
        if (place.name) {

          // create <li> for every place
          var placeHolder = document.createElement('li');

          // Add the name of the place inside this <li>
          placeHolder.innerHTML = `${place.name} has ${(place.rating) && place.rating} stars`;

          // put <li> inside <ul>
          placesHolder.appendChild(placeHolder);
        }
      }
    });

  }

  // get the area where <ul> with places will be rendered.
  var displayArea = document.querySelector('#display-result-area');
  // Render the filled <ul> inside div.
  displayArea.appendChild(placesHolder);

}
