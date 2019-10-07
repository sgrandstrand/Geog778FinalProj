// Javascript by //


//// Create Leaflet map object
//var map = L.map('mapid', {
//    center: [44.5, -90.79]
//});

// Add Tile Layer basemap
//L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
//    id: 'mapbox.streets',
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
//}).addTo(map);


//L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
//    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//    subdomains: 'abcd',
//    minZoom: 0,
//    maxZoom: 18,
//    ext: 'png'
//}).addTo(map);


var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
    id: 'mapbox.streets',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});
//    dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
//        id: 'mapbox.dark',
//        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
//    });

var map = L.map('mapid', {
    center: [44.5, -89.79],
    zoom: 6,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
});




// Database Queries
// Will go here

var cartoDBUserName = "{sgrandstrand}";
var sqlQuery = "SELECT * FROM sgrandstrand.well_nitrate";

var apikey = "9127f5c72a53c1d127d45e1ff9a13d521865b7f2"


// Function to add all coffee shops
//function showAll() {
//    // Get CARTO selection as GeoJSON and Add to Map
//    $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery + "&api_key=" + apikey, function (data) {
//        nitrate = L.geoJson(data, {
//            onEachFeature: function (feature, layer) {
//                layer.bindPopup('<p><b>' + feature.properties.nitr_ran + '</b><br /><em>');
//                layer.cartodb_id = feature.properties.cartodb_id;
//            }
//        }).addTo(map);
//    });
//};

$(document).ready(function () {
//    showAll();
    //Create sidebar function
    function createSidebar() {
        var sidebar = L.control.sidebar('sidebar').addTo(map);
        sidebar.open('home');
    }
});
