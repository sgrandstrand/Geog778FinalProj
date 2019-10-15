// Javascript by //


var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
    id: 'mapbox.streets',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});


var mapOptions = {
//    zoomControl: false,
    center: [44.5, -89.79],
    zoom: 6,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);

//
//// Layers for map ////
// Hawk Creek Boundary 
var hwkCreekBndry = "https://dservices.arcgis.com/HRPe58bUyBqyyiCt/arcgis/services/hawkCreekBndry/WFSServer?service=wfs&request=getcapabilities"

function getData() {
    // Get ESRI WFS as GeoJSON and Add to Map
    var hawkcreekbndry = L.esri.featureLayer({
        url: hwkCreekBndry,
        style: function () {
            return {
                color: "#70ca49",
                weight: 2
            };
        }
    })
    .addTo(map);
};

//map.createPane("boundaryPane").style.zIndex = 250;
//map.createPane("countyPane").style.zIndex = 260;
//map.createPane("wqindexPane").style.zIndex = 270;
//map.createPane("hydrindexPane").style.zIndex = 280;
////map.createPane("hu6Pane").style.zIndex = 290;
//map.createPane("hu8Pane").style.zIndex = 300;
//map.createPane("markerPane").style.zIndex = 450;
//map.createPane("popupPane").style.zIndex = 700;




// to call what is loaded on load of page
$(document).ready(function () {
    getData();


    //Create sidebar function

}); // end of document.ready function
