var link = document.querySelector(".search-form__link");
var popup = document.querySelector(".input");
link.addEventListener("click", function(event){
  event.preventDefault();

  popup.classList.add("input--show");
});

function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.8018134,-111.6061398)
  }
  var map = new google.maps.Map(document.querySelector('.map'),
                                mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
