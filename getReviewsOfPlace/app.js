

function initMap(){
  const body = document.querySelector('body');
  var service = new google.maps.places.PlacesService(body);

  service.getDetails({
          placeId: 'ChIJE04UNj9TpEARF4qPXzAOnfw'
        }, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {

            for (var i = 0; i < place.reviews.length; i++) {
              console.log(place.reviews[i]);
            }
            console.log(place);
          }
        });
}
