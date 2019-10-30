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


var mapOptions = {
    zoomControl: false,
    center: [46.35, -93.5],
    zoom: 6.25,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);

L.control.scale({
    position: 'bottomright',
    metric: false
}).addTo(map);

//L.control.zoom({
//    position: 'bottomright'
//}).addTo(map);
var zoomHome = L.Control.zoomHome({
    position: 'bottomright'
});
zoomHome.addTo(map);


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

var legend = L.control({
    position: 'bottomright'
});

map.on("browser-print-start", function (e) {
    L.control.scale({
        position: 'bottomright',
        metric: false,
        maxWidth: 200
    }).addTo(e.printMap);
    L.latlngGraticule({
        showLabel: true,
        dashArray: [5, 5],
        zoomInterval: [
            {
                start: 3,
                end: 3,
                interval: 30
            },
            {
                start: 4,
                end: 5,
                interval: 20
            },
            {
                start: 5,
                end: 7,
                interval: 10
                },
            {
                start: 7,
                end: 9,
                interval: 1
                },
            {
                start: 9,
                end: 11.25,
                interval: .5
                },
            {
                start: 11.25,
                end: 14,
                interval: .1
                },

            {
                start: 14,
                end: 15,
                interval: .05
        },
            {
                start: 15,
                end: 18,
                interval: .005
        }
                            ]
    }).addTo(e.printMap);

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
var a_dNRCatch = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/8"; //13 DNR catchments 
var a_bedrockPoll = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/12"; // 17bedrock surface pollution sensitivity
var a_nitrTwn = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/30"; //Nitrate rates by township
var a_easemnts = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/6" // 11 Boundary rin con easements? 
var a_gSSURGO = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/33" // WHAT IS THIS? 

var a_buffwetlnds = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/5" //Buffer Protection of Lakes, reservoirs, and wetlands

var a_buffwtrcrse = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/34" //Buffer Protection of watercourse

var a_rWI = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/35" //Restorable Wetland Inventory

var a_mask = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekWtrshed_Vector/FeatureServer/36" //mask of state for printing purposes


/// *** RASTER LAYERS ***////

var a_nLCD = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/NCLD_HawkCreek/MapServer"
// national land cover data 2016

var a_wildLife = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/WildlifeQual_HawkCreek/MapServer" // Wildlife Habitat Quality Risk

var a_pollsens = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/PollutionSens_HawkCreek/MapServer" //Pollution Sensitivity of Near-Surface Materials

var a_waterQual = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/WQ_HawkCreek/MapServer" //Water Quality Risk

var a_soil = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/SoilRisk_HawkCreek/MapServer" //Soil Erosion Risk

var a_envBen = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/EnvBen_HawkCreek/MapServer" //Environmental Risk Index


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
    style: function () {
        return {
            "color": '#88cd66',
            "fillColor": '#88cd66',
            "weight": 2,
        };
    }
});
var gAP_State = L.esri.featureLayer({
    url: a_gAP_State,
    style: function () {
        return {
            "color": '#e8beff',
            "fillColor": '#e8beff',
            "weight": 2,
        };
    }
});
var gAP_Cnty = L.esri.featureLayer({
    url: a_gAP_Cnty,
    style: function () {
        return {
            "color": '#ffff73',
            "fillColor": '#ffff73',
            "weight": 2,
        };
    }
});
var gAP_Fed = L.esri.featureLayer({
    url: a_gAP_Fed,
    style: function () {
        return {
            "color": '#bee8ff',
            "fillColor": '#bee8ff',
            "weight": 2,
        };
    }
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
    style: styleMBSBio,
});
var cONUS = L.esri.featureLayer({
    url: a_cONUS,
    where: "WETLAND_TY = 'Freshwater Emergent Wetland' OR WETLAND_TY = 'Freshwater Forested/Shrub Wetland'",
    style: styleCONUS,
});
var dNRCatch = L.esri.featureLayer({
    url: a_dNRCatch,
    style: styleDNRCatch,
});
var bedrockPoll = L.esri.featureLayer({
    url: a_bedrockPoll,
    style: styleBedrockPoll,

});
var nitrTwn = L.esri.featureLayer({
    url: a_nitrTwn,
    style: styleNitrTwn,
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
    style: styleGSSURGO,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Hydrological Group: </b>' + feature.properties.muaggatt_h + '</p>');
    },
});


var buffwetlnds = L.esri.featureLayer({
    url: a_buffwetlnds,
    style: function () {
        return {
            color: "#",
        };
    }
});

var buffwtrcrse = L.esri.featureLayer({
    url: a_buffwtrcrse,
    style: function () {
        return {
            color: "#",
        };
    }
});

var rWI = L.esri.featureLayer({
    url: a_rWI,
    style: function () {
        return {
            color: "#",
        };
    }
});

var mask = L.esri.featureLayer({
    url: a_mask,
    style: function () {
        return {
            color: "#",
        };
    }
});

/// *** RASTER LAYERS ***////

var nLCD = L.esri.tiledMapLayer({
    url: a_nLCD,
});


var wildLife = L.esri.tiledMapLayer({
    url: a_wildLife,
});
var pollsens = L.esri.tiledMapLayer({
    url: a_pollsens,
});
var waterQual = L.esri.tiledMapLayer({
    url: a_waterQual,
});

var soil = L.esri.tiledMapLayer({
    url: a_soil,
});

var envBen = L.esri.tiledMapLayer({
    url: a_envBen,
});


//get unique values method
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


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
    else if (type === 3) colorToUse = '#c300ff';
    else if (type === 4) colorToUse = '#9c9c9c';
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
    else if (type === "High") colorToUse = '#a1ceff';
    else if (type === "Impaired") colorToUse = '#9c9c9c';
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
    else if (type === "FULL RESTORATION") colorToUse = '#a1ceff';
    else if (type === "PARTIAL RESTORATION") colorToUse = '#9c9c9c';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleBedrockPoll(feature) {
    type = feature.properties.RATING;
    var colorToUse;
    if (type === "VH") colorToUse = '#f26f52';
    else if (type === "H") colorToUse = '#ffcd4e';
    else if (type === "M") colorToUse = '#fff34f';
    else if (type === "L") colorToUse = '#d4e9ca';
    else if (type === "VL") colorToUse = '#81c99d';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}




function styleMBSBio(feature) {
    type = feature.properties.biodiv_sig;
    var colorToUse;
    if (type === "Outstanding") colorToUse = '#00cd00';
    else if (type === "High") colorToUse = '#267300';
    else if (type === "Moderate") colorToUse = '#d3ffbe';
    else if (type === "Below") colorToUse = '#b2b2b2';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}

function styleCONUS(feature) {
    type = feature.properties.WETLAND_TY;
    var colorToUse;
    if (type === "Freshwater Emergent Wetland") colorToUse = '#2884ed';
    else if (type === "Freshwater Forested/Shrub Wetland") colorToUse = '#1b6e45';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        //        "opacity": ,
        "fillOpacity": 0.8
    };
}


function styleNitrCnty(feature) {
    type = feature.properties.Percent_of;
    var colorToUse;
    if (type <= 5) colorToUse = '#38a800';
    else if (type > 5 && type <= 10) colorToUse = '#ffff00';
    else if (type > 10) colorToUse = '#ff0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8
    };
}

function styleNitrTwn(feature) {
    type = feature.properties.InitNRange;
    var colorToUse;
    if (type === "<5%") colorToUse = '#38a800';
    else if (type === "5<10%") colorToUse = '#ffff00';
    else if (type === "≥10%") colorToUse = '#ff0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8
    };
}


function styleGSSURGO(feature) {
    type = feature.properties.muaggatt_h;
    //    var attributes = {
    //        'A': '#aaff00',
    //        'A/D': '#9f57f7',
    //        'B': '#4ecdd9',
    //        'C': '#f5e56c',
    //        'C/D': '#f0599d',
    //        'D': '#4d7300'
    //    };
    //    console.log(attributes)
    //    console.log(attributes.length);
    //    var title = "Hydrologic Group - Dominant Conditions"
    var colorToUse;
    if (type === "A") colorToUse = '#aaff00';
    else if (type === "A/D") colorToUse = '#9f57f7';
    else if (type === "B") colorToUse = '#4ecdd9';
    else if (type === "B/D") colorToUse = '#38538a';
    else if (type === "C") colorToUse = '#f5e56c';
    else if (type === "C/D") colorToUse = '#f0599d';
    else if (type === "D") colorToUse = '#4d7300';
    else colorToUse = "#9c9c9c";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8
    };
    //    var attributes = {
    //        'A': '#aaff00',
    //        'A/D': '#9f57f7',
    //        'B': '#4ecdd9',
    //        'C': '#f5e56c',
    //        'C/D': '#f0599d',
    //        'D': '#4d7300'
    //    };
    //    console.log(attributes.length);
    //    var title = "Hydrologic Group - Dominant Conditions"
    //    createlegend(attributes, title);

}

///// **** END OF STYLE FUNCTIONS *** \\\\\



////*** Functions to change Opacity on Layers ****\\\\\


function updateOpacity(val, layer) {
    layer.setStyle({
        fillOpacity: val,
    });
}

function updateOpacityBound(val, layer) {
    layer.setStyle({
        opacity: val,
    });
}

function updateOpacityTile(val, layer) {
    layer.setOpacity({
        opacity: val,
    });
    console.log(layer);
}




// Legend Controls 

//function createLegend(attributes, title) {
//    $("div.info.legend.leaflet-control").remove();
//    //Container
//    var div = L.DomUtil.create('div', 'info legend');
//    //Make control
//    var LegendControl = L.Control.extend({
//        options: {
//            position: 'bottomright'
//        },
//        onAdd: function () {
//            var labels = ['<strong>' + title + '</strong>']
//
//            attributes.forEach((k, v) => div.innerHTML += labels.push('<i class="circle" style="background:' + $ {
//                v
//            } + '"></i> ' + $ {
//                k
//            }));
//            div.innerHTML = labels.join('<br>');
//            return div;
//        }
//    });
//    map.addControl(new LegendControl());
//}


/// Zoom to Layer
function zoomToFeature(urlLayer) {
    var query = L.esri.query({
        url: urlLayer,
    });
    query.bounds(function (error, latLngBounds, response) {
        if (error) {
            console.log(error);
            return;
        }
        map.fitBounds(latLngBounds);
    });
}


L.easyButton('fa-crosshairs fa-lg', function (btn, map) {
    var query = L.esri.query({
        url: a_hwkCreekBndry
    });
    query.bounds(function (error, latLngBounds, response) {
        if (error) {
            console.log(error);
            return;
        }
        map.fitBounds(latLngBounds);
    });
}).addTo(map);


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




    //    legend.onAdd = function (map) {
    //
    //        var div = L.DomUtil.create('div', 'info legend'),
    //            grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    //            labels = [],
    //            from, to;
    //
    //        // loop through our density intervals and generate a label with a colored square for each interval
    //        for (var i = 0; i < grades.length; i++) {
    //            from = grades[i];
    //            to = grades[i + 1];
    //
    //            labels.push(
    //                '<i style="background:' + getColor(from + 1) + '"></i> ' +
    //                from + (to ? '&ndash;' + to : '+'));
    //        }
    //
    //
    //        div.innerHTML = labels.join('<br>');
    //        return div;
    //    };
    //
    //    legend.addTo(map);





});




// this still gave undefined  
//    layer.on("load", function (e)) {
//        var lookup = {};
//        var items = cONUS.properties.WETLAND_TY;
//        var result = [];
//
//        for (var item, i = 0; item = items[i++];) {
//            var name = item.name;
//
//            if (!(name in lookup)) {
//                lookup[name] = 1;
//                result.push(name);
//            }
//        }
//        console.log(result);
//    }



//Iterate through features, but features can't do that until they are loaded. weird quality with esri leaflet
//    .on('load')
//        var lookup = {};
//    var items = feature.properties.WETLAND_TY;
//    var result = [];
//
//    for (var item, i = 0; item = items[i++];) {
//        var name = item.name;
//
//        if (!(name in lookup)) {
//            lookup[name] = 1;
//            result.push(name);
//        }
//    }
//    console.log(result);


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
