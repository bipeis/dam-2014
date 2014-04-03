$(function(){
    "use strict";

function createMap(position) {
var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var myOptions = {
zoom: 15,
center: latlng,
mapTypeControl: false,
navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map"), myOptions);
return map;
}


console.log(document.getElementById("map"));
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function (position) {
var coords = position.coords;
console.log(position);
var map = createMap(position);
});
}


});