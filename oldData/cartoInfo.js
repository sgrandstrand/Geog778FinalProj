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



// Function to add all coffee shops
function getData() {
    // Get CARTO selection as GeoJSON and Add to Map
    $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery1 + "&api_key=" + apikey, function (data) {
        county = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p><b>' + feature.properties.cty_name + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });
    $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery2 + "&api_key=" + apikey, function (data) {
        boundary = L.geoJson(data).addTo(map);
    });
    $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery3 + "&api_key=" + apikey, function (data) {
        wqindex = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p>WQ Index<b>' + feature.properties.dnr_waters + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });

    $.getJSON("https://sgrandstrand.carto.com/api/v2/sql?format=GeoJSON&q=" + sqlQuery4 + "&api_key=" + apikey, function (data) {
        wqindex = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup('<p>Hydro Index<b>' + feature.properties.dnr_waters + '</b><br /><em>');
                layer.cartodb_id = feature.properties.cartodb_id;
            }
        }).addTo(map);
    });

};

<
link rel = "stylesheet"
href = "http://libs.cartocdn.com/cartodb.js/v3/3.15/themes/css/cartodb.css" / >

    <
    script src = "http://libs.cartocdn.com/cartodb.js/v3/3.15/cartodb.js" > < /script>
