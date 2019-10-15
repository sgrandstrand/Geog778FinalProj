// Javascript by //


var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
    id: 'mapbox.streets',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});


var mapOptions = {
    //    zoomControl: false,
    center: [44.5, -89.79],
    //    zoom: 6,
    //    minZoom: 3,
    //    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);

//
////// Layers for map ////
//// Hawk Creek Boundary 
//var hwkCreekBndry = "https://dservices.arcgis.com/HRPe58bUyBqyyiCt/arcgis/services/hawkCreekBndry/WFSServer?service=wfs&request=getcapabilities"
//
//function getData() {
//    // Get ESRI WFS as GeoJSON and Add to Map
//    var hawkcreekbndry = L.esri.featureLayer({
//        url: hwkCreekBndry,
//        style: function () {
//            return {
//                color: "#70ca49",
//                weight: 2
//            };
//        }
//    })
//    //.addTo(map);
//};

//map.createPane("boundaryPane").style.zIndex = 250;
//map.createPane("countyPane").style.zIndex = 260;
//map.createPane("wqindexPane").style.zIndex = 270;
//map.createPane("hydrindexPane").style.zIndex = 280;
////map.createPane("hu6Pane").style.zIndex = 290;
//map.createPane("hu8Pane").style.zIndex = 300;
//map.createPane("markerPane").style.zIndex = 450;
//map.createPane("popupPane").style.zIndex = 700;

////hold layers
//var county = null;
//var boundary = null;
//var wqindex = null;
//var hydrindex = null;

// carto info for future reference: 
var apikey = "9127f5c72a53c1d127d45e1ff9a13d521865b7f2"
var cartoDBUserName = "{sgrandstrand}";

// sql queries to get layers
var sqlQuery1 = "SELECT * FROM sgrandstrand.wtrshdcntys"; // county layer
var sqlQuery2 = "SELECT * FROM sgrandstrand.hawkcreekbndry"; // watershed boundary
var sqlQuery3 = "SELECT * FROM sgrandstrand.wqindex_clp"; // water quality index
var sqlQuery4 = "SELECT * FROM sgrandstrand.hydindex_clp";
var sqlQuery5 = "SELECT * FROM sgrandstrand.geoindex_clp";
var sqlQuery6 = "SELECT * FROM sgrandstrand.conindex_clp";
var sqlQuery7 = "SELECT * FROM sgrandstrand.dnr_catchments_clp";
var sqlQuery8 = "SELECT * FROM sgrandstrand.dnr_native_prairies_clp";
var sqlQuery9 = "SELECT * FROM sgrandstrand.bdry_bwsr_rim_cons_easements_clp";



// Function to add layers from Carto
function getData() {
    // Get CARTO selection as GeoJSON and Add to Map
    var county = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery1 + "&api_key=" + apikey, function (data) {
        county = L.geoJson(data, {
            //            pane: 'countyPane',
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p><b>' + feature.properties.cty_name + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });
    var boundary = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery2 + "&api_key=" + apikey, function (data) {
        boundary = L.geoJson(data, {
            //            pane: 'boundaryPane',
        }).addTo(map);
    });
    var wqindex = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery3 + "&api_key=" + apikey, function (data) {
        wqindex = L.geoJson(data, {
            //            pane: 'wqindexPane',
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p>WQ Index<b>' + feature.properties.dnr_waters + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });

    var hydrindex = $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery4 + "&api_key=" + apikey, function (data) {
        hydrindex = L.geoJson(data, {
            //            pane: 'hydrindexPane',
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p>Hydro Index<b>' + feature.properties.dnr_waters + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });


    var baseLayers = {
        "Light": light
    };
    console.log(baseLayers);
    var overlays = {
        "Counties": county,
        "Hawk Creek Watershed": boundary,
        "Water QUality Index": wqindex,
        "Hydro Index": hydrindex
    };
    console.log(overlays)
    //    L.control.zoom({
    //        position: "topleft"
    //    }).addTo(map)
    //    L.control.layers(baseLayers, overlays).addTo(map);

    //Add layers control to the map
    var layerControl = L.control.layers(baseLayers, overlays, {
        position: 'topright',
        collapsed: false
    });
    layerControl.addTo(map);
};



// to call what is loaded on load of page
$(document).ready(function () {
    getData();
    //Create sidebar function

}); // end of document.ready function
