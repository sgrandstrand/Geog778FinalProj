// Javascript by //


var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {

    //                        pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA
    //    id: 'mapbox.streets',
    id: 'mapbox.light',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
    id: 'mapbox.dark',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});

var imagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
    id: 'mapbox.satellite',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
});
//                       mapbox://styles/mapbox/dark-v10
//                       mapbox://styles/mapbox/satellite-v9

var mapOptions = {
    zoomControl: false,
    center: [45.90, -92],
    zoom: 6,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);

L.control.scale({
    position: 'bottomright'
}).addTo(map);

L.control.zoom({
    position: 'bottomright'
}).addTo(map);


var baseMaps = {
    "Light": light,
    "Dark": dark,
    "Imagery": imagery
}
L.control.layers(null, baseMaps).addTo(map);

// Leaflet Browser Print

L.control.browserPrint({
    title: 'Print Map',
    documentTitle: 'Hawk Creek Watershed',
    closePopupsOnPrint: false,
    printModes: [
		"Landscape",
		"Portrait",
		L.control.browserPrint.mode.auto()
	],
    manualMode: false,
    position: 'topright'
}).addTo(map);

map.on("browser-print-start", function (e) {
    L.control.scale({
        position: 'bottomright',
        metric: false,
        maxWidth: 200
    }).addTo(e.printMap);
    L.control.
});




//// URL's for Layers ////

var a_hwkCreekBndry = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/1"; //2 Hawk Creek Boundary 
var a_cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/0"; //1 county layer
var a_huc8 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/2"; //6USGS HUC 8
var a_huc10 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/3"; //7USGS HUC 10
var a_huc12 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/4"; //8USGS HUC 12

var a_fEMAflood = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/13"; //18 100 year flood plain from FEMA
var a_imptStrm = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/26"; //Impaired streams
var a_impLks = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/27"; //Impaired Lakes
var a_altwtr = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/14"; //19 Altered Watercourse
var a_phos = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/11"; // 16 lake phosophorus sensitivity significance 
var a_trout = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/31"; //trout streams
var a_wellhead = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/32"; //Well Head Protection Areas
var a_wtrVul = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/10"; //15 drinking water supply vulnerability

//land status layers
var a_gAP_DNR = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/22"; //27GAP DNR Lands
var a_gAP_State = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/23"; //28GAP state Lands
var a_gAP_Cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/24"; //GAP county Lands
var a_gAP_Fed = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/25"; //GAP Federal Lands
var a_natPra = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/8"; //14DNR native prairies

// index layers //
var a_bioIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/15"; //20Bio Index Mean
var a_hydIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/16"; //21Hyd Index Mean
var a_geoIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/17"; //22Geo Index Mean
var a_conIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/18"; //23Con Index Mean
var a_wQIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/19"; //24WQ index Mean
var a_combIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/20"; //25combined index mean

// Misc. layers

var a_natPlnt = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/21"; //26DNR native plant communities
var a_mBSbio = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/28"; //MBS sites of biodiversity significance 
var a_cONUS = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/7"; //12NWI CONUS_wet_poly
var a_dNRCatch = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/9"; //13 DNR catchments 
var a_bedrockPoll = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/12"; // 17bedrock surface pollution sensitivity
var a_nitrCnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/29"; //Nitrate rates by county
var a_nitrTwn = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/30"; //Nitrate rates by township
var a_easemnts = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/6" // 11 Boundary rin con easements? 
var a_gSSURGO = "" // WHAT IS THIS? 

/// *** RASTER LAYERS ***////

// var a_soil = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekRast/MapServer/0"


// Get ESRI WFS as GeoJSON and Add to Map

/////*** BOUNDARY LAYERS ****\\\\

var hawkcreekbndry = L.esri.featureLayer({
    url: a_hwkCreekBndry,
    style: function () {
        return {
            color: "#70ca49"
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> Hawk Creek Watershed </i></p>');
    },
}).addTo(map);

var cnty = L.esri.featureLayer({
    url: a_cnty,
    style: function () {
        return {
            color: "#7256E8",
            weight: 2
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> County: ' + feature.properties.CTY_NAME + '</i></p>');
    },
});


var huc8 = L.esri.featureLayer({
    url: a_huc8,
    style: function () {
        return {
            color: "#a6cee3",
            weight: 2
        };
    }
});
var huc10 = L.esri.featureLayer({
    url: a_huc10,
    style: function () {
        return {
            color: "#fb9a99",
            weight: 2
        };
    }
});
var huc12 = L.esri.featureLayer({
    url: a_huc12,
    style: function () {
        return {
            color: "#fdbf6f",
            weight: 2
        };
    }
});


////// *** hydrography layers *** /////

var fEMAflood = L.esri.featureLayer({
    url: a_fEMAflood,
    where: "FLD_ZONE = 'A' OR FLD_ZONE = 'AE' OR FLD_ZONE = 'AH' OR FLD_ZONE = 'AD'",
    style: function () {
        return {
            color: "#ffff00",
            weight: 2
        };
    }
});

var imptStrm = L.esri.featureLayer({
    url: a_imptStrm,
    style: function () {
        return {
            color: "#8c0007",
        };
    }
});
var impLks = L.esri.featureLayer({
    url: a_impLks,
    style: function () {
        return {
            color: "#002366",
        };
    }
});
var altwtr = L.esri.featureLayer({
    url: a_altwtr,
    where: "AWEvtType = 1 OR AWEvtType = 2 OR AWEvtType = 3 OR AWEvtType = 4",
    style: styleAltWtr,
});
var phos = L.esri.featureLayer({
    url: a_phos,
    style: stylePhos,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Phosphorus Priority Class: </b>' + feature.properties.LPSS_CLASS + '</p>');
    },

});
var trout = L.esri.featureLayer({
    url: a_trout,
    style: function () {
        return {
            color: "#f781bf",
        };
    }
});
var wellhead = L.esri.featureLayer({
    url: a_wellhead,
    style: function () {
        return {
            color: "#a65628",
        };
    }
});
var wtrVul = L.esri.featureLayer({
    url: a_wtrVul,
    style: styleWtrVul,
});

////// *** landstatus layers *** /////

var gAP_DNR = L.esri.featureLayer({
    url: a_gAP_DNR,
    style: styleGAP_DNR,
});
var gAP_State = L.esri.featureLayer({
    url: a_gAP_State,
    style: styleGAP_State,
});
var gAP_Cnty = L.esri.featureLayer({
    url: a_gAP_Cnty,
    style: styleGAP_Cnty,
});
var gAP_Fed = L.esri.featureLayer({
    url: a_gAP_Fed,
    style: styleGAP_Fed,
});
var natPra = L.esri.featureLayer({
    url: a_natPra,
    style: function () {
        return {
            color: "#735100",
        };
    }
});


////// *** index layers *** /////

var bioIndex = L.esri.featureLayer({
    url: a_bioIndex,
    style: styleBioIndex,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Bio Index Mean: ' + feature.properties.B_I_MEAN + '</b></p>');
    },
});
var hydIndex = L.esri.featureLayer({
    url: a_hydIndex,
    style: styleHydIndex,
});
var geoIndex = L.esri.featureLayer({
    url: a_geoIndex,
    style: styleGeoIndex,
});
var conIndex = L.esri.featureLayer({
    url: a_conIndex,
    style: styleConIndex,
});
var wQIndex = L.esri.featureLayer({
    url: a_wQIndex,
    style: styleWQIndex,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Water Quality Index Mean: ' + feature.properties.W_I_MEAN + '</b></p>');
    },
});
var combIndex = L.esri.featureLayer({
    url: a_combIndex,
    style: styleCombIndex,
});





/////*** Misc. layers ***/////

var natPlnt = L.esri.featureLayer({
    url: a_natPlnt,
    style: function () {
        return {
            color: "#71c98d",
        };
    }
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
    style: function () {
        return {
            color: "#bf324c",
        };
    }
});
var nitrCnty = L.esri.featureLayer({
    url: a_nitrCnty,
});
var nitrTwn = L.esri.featureLayer({
    url: a_nitrTwn,
});
var easemnts = L.esri.featureLayer({
    url: a_easemnts,
    style: function () {
        return {
            color: "#f28f24",
        };
    }
});

var gSSURGO = L.esri.featureLayer({
    url: a_gSSURGO,
});


//*** RASTER LAYERS ***///

//var soil = L.esri.tiledMapLayer({
//    url: a_soil,
//});

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
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleAltWtr(feature) {
    type = feature.properties.AWEvtType;
    var colorToUse;
    if (type === 1) colorToUse = '#f5605d';
    else if (type === 2) colorToUse = '#38a800';
    else if (level === 3) colorToUse = '#c300ff';
    else if (level === 4) colorToUse = '#9c9c9c';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 1,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function stylePhos(feature) {
    type = feature.properties.LPSS_CLASS;
    var colorToUse;
    if (type === "Highest") colorToUse = '#002673';
    else if (type === "Higher") colorToUse = '#005ce6';
    else if (level === "High") colorToUse = '#a1ceff';
    else if (level === "Impaired") colorToUse = '#9c9c9c';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleGAP_DNR(feature) {
    type = feature.properties.AGENCY_NAM;
    var colorToUse;
    if (type === "Division of Ecological Services") colorToUse = '#d3ffbe';
    else if (type === "Division of Enforcement") colorToUse = '#b4d79e';
    else if (type === "Division of Fish and Wildlife") colorToUse = '#a5f57a';
    else if (type === "Division of Forestry") colorToUse = '#88cd66';
    else if (type === "Division of Lands and Minerals") colorToUse = '#abcd66';
    else if (type === "Division of Parks and Recreation") colorToUse = '#66cdab';
    else if (type === "Division of Trails and Waterways") colorToUse = '#448970';
    else if (type === "Division of Waters") colorToUse = '#5c8944';
    else if (type === "Minnesota DNR (Undifferentiated)") colorToUse = '#267300';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleGAP_State(feature) {
    type = feature.properties.AGENCY_NAM;
    var colorToUse;
    if (type === "Department of Agriculture") colorToUse = '#ffd37f';
    else if (type === "Department of Corrections") colorToUse = '#e8beff';
    else if (type === "Department of Military Affairs") colorToUse = '#ff00c3';
    else if (type === "Department of Transportation") colorToUse = '#898944';
    else if (type === "State (Undifferentiated)") colorToUse = '#897044';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleGAP_Cnty(feature) {
    type = feature.properties.AGENCY_NAM;
    var colorToUse;
    if (type === "County") colorToUse = '#ffffbe';
    else if (type === "County Admin/State Forest") colorToUse = '#ffff73';
    else if (type === "County Admin/State Owned") colorToUse = '#d7d79e';
    else if (type === "County Admin/State Park") colorToUse = '#cdcd66';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleGAP_Fed(feature) {
    type = feature.properties.AGENCY_NAM;
    var colorToUse;
    if (type === "U.S. Army Corps of Engineers") colorToUse = '#bee8ff';
    else if (type === "U.S. Department of Agriculture") colorToUse = '#73deff';
    else if (type === "U.S. Forest Service") colorToUse = '#00c3ff';
    else if (type === "U.S. Fish and Wildlife Service") colorToUse = '#73b2ff';
    else if (type === "U.S. Park Service") colorToUse = '#005ce6';
    else if (type === "Bureau of Indian Affairs") colorToUse = '#004da8';
    else if (type === "Bureau of Land Management") colorToUse = '#446589';
    else if (type === "Farmers Home Administration") colorToUse = '#002673';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleBioIndex(feature) {
    type = feature.properties.B_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';

    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleHydIndex(feature) {
    type = feature.properties.H_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';

    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleGeoIndex(feature) {
    type = feature.properties.G_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';

    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleConIndex(feature) {
    type = feature.properties.C_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';

    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleWQIndex(feature) {
    type = feature.properties.W_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleCombIndex(feature) {
    type = feature.properties.A_I_MEAN;
    var colorToUse;
    if (type >= 0 && type <= 10) colorToUse = '#e60000';
    else if (type > 10 && type <= 20) colorToUse = '#ff3700';
    else if (type > 20 && type <= 30) colorToUse = '#ff7300';
    else if (type > 30 && type <= 40) colorToUse = '#ffaa00';
    else if (type > 40 && type <= 50) colorToUse = '#ffe100';
    else if (type > 50 && type <= 60) colorToUse = '#e5f500';
    else if (type > 60 && type <= 70) colorToUse = '#afe000';
    else if (type > 70 && type <= 80) colorToUse = '#83cf00';
    else if (type > 80 && type <= 90) colorToUse = '#5aba00';
    else if (type > 90 && type <= 100) colorToUse = '#308f00';

    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleDNRCatch(feature) {
    type = feature.properties.STRATEGY;
    var colorToUse;
    if (type === "VIGILANCE") colorToUse = '#002673';
    else if (type === "NEEDS PROTECTION") colorToUse = '#005ce6';
    else if (level === "FULL RESTORATION") colorToUse = '#a1ceff';
    else if (level === "PARTIAL RESTORATION") colorToUse = '#9c9c9c';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}
////*** Functions to change Opacity on Layers ****\\\\\


function updateOpacity(val, layer) {
    layer.setStyle({
        //        opacity: val,
        fillOpacity: val,
    });
}

function updateOpacityBound(val, layer) {
    layer.setStyle({
        opacity: val,
    });
}



// Legend Controls 




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

    /// CHANGE opacity of layer


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
