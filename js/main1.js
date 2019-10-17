// Javascript by //


var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
    id: 'mapbox.streets',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});


var mapOptions = {
    zoomControl: false,
    center: [45.90, -92],
    zoom: 6,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);


L.control.zoom({
    position: 'topright'
}).addTo(map);
//var sidebar = L.control.sidebar({
//    container: 'sidebar'
//}).addTo(map);
//sidebar.open('features');

//// URL's for Layers ////

var a_hwkCreekBndry = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/2"; // Hawk Creek Boundary 
var a_cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/1"; // county layer
var a_huc2 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/3"; // USGS HUC 2
var a_huc4 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/4"; //USGS HUC 4
var a_huc6 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/5"; //USGS HUC 6
var a_huc8 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/6"; //USGS HUC 8
var a_huc10 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/7"; //USGS HUC 10
var a_huc12 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/8"; //USGS HUC 12
var a_huc14 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/9"; //USGS HUC 14
var a_huc16 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/10"; //USGS HUC 16

var a_fEMAflood = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/18"; // 100 year flood plain from FEMA
var a_imptStrm = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/31"; //Impaired streams
var a_impLks = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/32"; //Impaired Lakes
var a_altwtr = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/19"; //Altered Watercourse
var a_phos = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/16"; // lake phosophorus sensitivity significance 
var a_trout = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/36"; //trout streams
var a_wellhead = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/37"; //Well Head Protection Areas
var a_wtrVul = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/15"; // drinking water supply vulnerability

//land status layers
var a_gAP_DNR = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/27"; //GAP DNR Lands
var a_gAP_State = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/28"; //GAP state Lands
var a_gAP_Cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/29"; //GAP county Lands
var a_gAP_Fed = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/30"; //GAP Federal Lands
var a_natPra = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/14"; //DNR native prairies

// index layers //
var a_bioIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/20"; //Bio Index Mean
var a_hydIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/21"; //Hyd Index Mean
var a_geoIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/22"; //Geo Index Mean
var a_conIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/23"; //Con Index Mean
var a_wQIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/24"; //WQ index Mean
var a_combIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/25"; //combined index mean

// Misc. layers

var a_natPlnt = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/26"; //DNR native plant communities
var a_mBSbio = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/33"; //MBS sites of biodiversity significance 
var a_cONUS = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/12"; //NWI CONUS_wet_poly
var a_dNRCatch = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/13"; // DNR catchments 
var a_bedrockPoll = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/17"; // bedrock surface pollution sensitivity
var a_nitrCnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/34"; //Nitrate rates by county
var a_nitrTwn = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/35"; //Nitrate rates by township



// Get ESRI WFS as GeoJSON and Add to Map

/////*** BOUNDARY LAYERS ****\\\\
var hawkcreekbndry = L.esri.featureLayer({
    url: a_hwkCreekBndry,
    style: function () {
        return {
            color: "#70ca49",
            weight: 2
        };
    }
}).addTo(map);

var cnty = L.esri.featureLayer({
    url: a_cnty,
    style: function () {
        return {
            color: "#7256E8",
            weight: 2
        };
    }
})

var huc2 = L.esri.featureLayer({
    url: a_huc2,
});

var huc4 = L.esri.featureLayer({
    url: a_huc4,
});
var huc6 = L.esri.featureLayer({
    url: a_huc6,
});
var huc8 = L.esri.featureLayer({
    url: a_huc8,
});
var huc10 = L.esri.featureLayer({
    url: a_huc10,
});
var huc12 = L.esri.featureLayer({
    url: a_huc12,
});
var huc14 = L.esri.featureLayer({
    url: a_huc14,
});
var huc16 = L.esri.featureLayer({
    url: a_huc16,
});



////// *** hydrography layers *** /////

var fEMAflood = L.esri.featureLayer({
    url: a_fEMAflood,
});

var imptStrm = L.esri.featureLayer({
    url: a_imptStrm,
});
var impLks = L.esri.featureLayer({
    url: a_impLks,
});
var altwtr = L.esri.featureLayer({
    url: a_altwtr,
});
var phos = L.esri.featureLayer({
    url: a_phos,
});
var trout = L.esri.featureLayer({
    url: a_trout,
});
var wellhead = L.esri.featureLayer({
    url: a_wellhead,
});
var wtrVul = L.esri.featureLayer({
    url: a_wtrVul,
    style: styleWtrVul,
});

////// *** landstatus layers *** /////

var gAP_DNR = L.esri.featureLayer({
    url: a_gAP_DNR,
});
var gAP_State = L.esri.featureLayer({
    url: a_gAP_State,
});
var gAP_Cnty = L.esri.featureLayer({
    url: a_gAP_Cnty,
});
var gAP_Fed = L.esri.featureLayer({
    url: a_gAP_Fed,
});
var natPra = L.esri.featureLayer({
    url: a_natPra,
});


////// *** index layers *** /////

var bioIndex = L.esri.featureLayer({
    url: a_bioIndex,
});
var hydIndex = L.esri.featureLayer({
    url: a_hydIndex,
});
var geoIndex = L.esri.featureLayer({
    url: a_geoIndex,
});
var conIndex = L.esri.featureLayer({
    url: a_conIndex,
});
var wQIndex = L.esri.featureLayer({
    url: a_wQIndex,
});
var combIndex = L.esri.featureLayer({
    url: a_combIndex,
});



/////*** Misc. layers ***/////

var natPlnt = L.esri.featureLayer({
    url: a_natPlnt,
});
var mBSbio = L.esri.featureLayer({
    url: a_mBSbio,
});
var cONUS = L.esri.featureLayer({
    url: a_cONUS,
});
var dNRCatch = L.esri.featureLayer({
    url: a_dNRCatch,
});
var bedrockPoll = L.esri.featureLayer({
    url: a_bedrockPoll,
});
var nitrCnty = L.esri.featureLayer({
    url: a_nitrCnty,
});
var nitrTwn = L.esri.featureLayer({
    url: a_nitrTwn,
});



//map.createPane("boundaryPane").style.zIndex = 250;
//map.createPane("countyPane").style.zIndex = 260;
//map.createPane("wqindexPane").style.zIndex = 270;
//map.createPane("hydrindexPane").style.zIndex = 280;
////map.createPane("hu6Pane").style.zIndex = 290;
//map.createPane("hu8Pane").style.zIndex = 300;
//map.createPane("markerPane").style.zIndex = 450;
//map.createPane("popupPane").style.zIndex = 700;

/// STYLE FUNCTIONS

// Water vulnerability
function styleWtrVul(feature) {
    level = feature.properties.dws_vul;
    var colorToUse;
    if (level === "Very High") colorToUse = '#ff7f7f';
    else if (level === "High") colorToUse = '#ffd27f';
    else if (level === "Moderate") colorToUse = '#ffffbe';
    else if (level === "Low") colorToUse = '#d3ffbe';
    else if (level === "Very Low") colorToUse = '#bed2ff';
    else colorToUse - "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}



$(document).ready(function () {

    $('input[type="checkbox"]').click(function () {
        layerClicked = window[event.target.value];
        if ($(this).is(":checked")) {
            map.addLayer(layerClicked);
        } else if ($(this).is(":not(:checked)")) {

            map.removeLayer(layerClicked);
        }
    });
    $('#toggleSidebar').click(function () {
        $("#features").toggle(function () {

        });
    });
    $('#closeSidebar').click(function () {
        $("#features").toggle(function () {

        });
    });

});
// to call what is loaded on load of page
//        $(document).ready(function () {
//            getData();

//    //keep nav bar from dissapearing 
//    var margin = 78;
//    $('#mapid').on('mousedown', function () {
//        $('#navbarid').css('margin-top', margin + 'px');
//    });
//    $('#mapid').blur(function () {
//        margin = margin + 78;
//    });


//Create sidebar function
//
//}); // end of document.ready function


// potential function to add any layer to map. 
//function getData1(url) {
//    layer = L.esri.featureLayer({
//        url: url
//    }).addTo(map);
//
//};
