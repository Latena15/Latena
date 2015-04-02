(function(){

var map = L.map('map').setView([40.7127, -74.0059, 16);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var marker = L.marker ([40.8075, -73.9619]).addTo(map);
    marker.bindPopup("The J-School").openPopup();



var locations = {

    'Butler':{
        name: 'Butler'
        lat: 40.8064,
        lng: -73.9631,
        },

    'Toms':{
        name: 'Toms'
        lat: 40.802314,
        lng:-73.951123,
        },

    'Teachers College':{
        name: 'Teachers College'
        lat: 40.8101,
        lng: -73.9611,
        },
    }


var circle = L.circle([40.8075, -73.9619]), 500, {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [40.80, -73.9631],
    [40.80, -73.951123],
    [40.81, -73.9611]
]).addTo(map);


var popup = L.popup()
    .setLatLng([40.8075, -73.9619])
    .setContent("Columbia")
    .openOn(map);

    function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


}).call(this);

