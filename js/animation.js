var link = document.querySelector(".search-form__link");
var popup = document.querySelector(".input");
var input = document.querySelector(".input--show")
link.addEventListener("click", function(event){
  event.preventDefault();
if(!popup.classList.contains("input--show"))
  popup.classList.add("input--show");
else
  popup.classList.remove("input--show")
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
