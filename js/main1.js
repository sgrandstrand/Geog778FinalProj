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
    center: [46.35, -94.8], // large screens
    //    center: [46.35, -93.5],
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    zoom: 6.5,
    minZoom: 3,
    maxZoom: 18,
    layers: [light]
};


var map = L.map('mapid', mapOptions);


//var light2 = new L.TileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2dyYW5kc3RyYW5kIiwiYSI6ImNqY3BtMm52MjJyZWsycXBmMDZremxsN3EifQ.3HVgf9jrNbmCSBBBlp5zlQ', {
//    minZoom: 3,
//    maxZoom: 18,
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
//});



L.control.scale({
    position: 'bottomright',
    metric: false
}).addTo(map);

//var miniMap = new L.Control.MiniMap(light2, {
//    toggleDisplay: true,
//}).addTo(map);
//L.control.zoom({
//    position: 'bottomright'
//}).addTo(map);
var zoomHome = L.Control.zoomHome({
    position: 'topleft'
});
zoomHome.addTo(map);

var zoomboxOptions = {
    modal: true,
    title: "Box area zoom",
    zoomSnap: 0.25
};
var zoomboxControl = L.control.zoomBox(zoomboxOptions);
map.addControl(zoomboxControl);

var baseMaps = {
    "Light": light,
    "Dark": dark,
    "Imagery": imagery
}
L.control.layers(baseMaps, null).addTo(map);

// bottom left or topleft?? ask
var loadingControl = L.Control.loading({
    separate: true,
    position: 'bottomleft'
});
map.addControl(loadingControl);

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



// Leaflet Browser Print

L.control.browserPrint({
    title: 'Print Map',
    documentTitle: 'Hawk Creek Middle Minnesota 1W1P',
    closePopupsOnPrint: false,
    printModes: [
		"Landscape",
		"Portrait",
        L.control.browserPrint.mode.portrait("Tabloid Portrait", "tabloid"),
//		L.control.browserPrint.mode.auto()
	],
    manualMode: false,
    position: 'topright'
}).addTo(map);

map.on("browser-print-end", function (e) {
    postPrintLegend();
    sidebar.open('home');
});

map.on("browser-print-start", function (e) {
    sidebar.close('home');
    L.control.scale({
        position: 'bottomright',
        metric: false,
        maxWidth: 200
    }).addTo(e.printMap);
    addPrintLegend(e);
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



//Create sidebar function
//function createSidebar() {
//    var sidebar = L.control.sidebar('sidebar').addTo(map);
//    sidebar.open('home');
//}
var sidebar = L.control.sidebar('sidebar').addTo(map);


//// URL's for Layers ////

var a_twnshp = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/0" //township layer
var a_zones = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/7" //zones for hawk creek
var a_hwkCreekBndry = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/2"; //2 Hawk Creek Boundary 
var a_cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/1"; //1 county layer
var a_huc8 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/3"; //6USGS HUC 8
var a_huc10 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/4"; //7USGS HUC 10
var a_huc12 = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/5"; //8USGS HUC 12

var a_fEMAflood = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/0"; //18 100 year flood plain from FEMA
var a_imptStrm = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/0"; //Impaired streams
var a_impLks = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/1"; //Impaired Lakes
var a_altwtr = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/1"; //19 Altered Watercourse
var a_phos = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/2"; // 16 lake phosophorus sensitivity significance 
var a_trout = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Biodiversity_HawkCrk/FeatureServer/0"; //trout streams
var a_wellhead = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Groundwater_HawkCrk/FeatureServer/6"; //Well Head Protection Areas
var a_wtrVul = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Groundwater_HawkCrk/FeatureServer/0"; //15 drinking water supply vulnerability

//land status layers
var a_gAP_DNR = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/0"; //27GAP DNR Lands
var a_gAP_State = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/1"; //28GAP state Lands
var a_gAP_Cnty = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/2"; //GAP county Lands
var a_gAP_Fed = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/3"; //GAP Federal Lands
var a_natPra = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Biodiversity_HawkCrk/FeatureServer/1"; //14DNR native prairies

// index layers //
var a_bioIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/0"; //20Bio Index Mean
var a_hydIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/2"; //21Hyd Index Mean
var a_geoIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/3"; //22Geo Index Mean
var a_conIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/1"; //23Con Index Mean
var a_wQIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/4"; //24WQ index Mean
var a_combIndex = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/5"; //25combined index mean

// Misc. layers

var a_natPlnt = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Biodiversity_HawkCrk/FeatureServer/2"; //26DNR native plant communities
var a_mBSbio = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Biodiversity_HawkCrk/FeatureServer/3"; //MBS sites of biodiversity significance 
var a_cONUS = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/2"; //12NWI CONUS_wet_poly
var a_dNRCatch = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Characteristics_HawkCrk/FeatureServer/6"; //13 DNR catchments 
var a_bedrockPoll = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Groundwater_HawkCrk/FeatureServer/7"; // 17bedrock surface pollution sensitivity
var a_nitrTwn = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Groundwater_HawkCrk/FeatureServer/8"; //Nitrate rates by township
var a_easemnts = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/4" // 11 Boundary rin con easements? 
var a_gSSURGO = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/LandUse_HawkCrk/FeatureServer/5" // WHAT IS THIS? 

var a_buffwetlnds = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/3" //Buffer Protection of Lakes, reservoirs, and wetlands

var a_buffwtrcrse = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/4" //Buffer Protection of watercourse

var a_rWI = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Hydrology_HawkCrk/FeatureServer/5" //Restorable Wetland Inventory

var a_mask = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/Boundary_HawkCrk/FeatureServer/6" //mask of state for printing purposes

var a_hSPF_TSS = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/3" //HSPF loading for TSS

var a_hSPF_TN = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/4" //HSPF loading for TN

var a_hSPF_TP = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/5" //HSPF loading for TP

var a_hSPF_Discharge = "https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/SurfaceWaterQuality_HawkCrk/FeatureServer/6" //HSPF loading for Discharge

/// *** RASTER LAYERS ***////

var a_nLCD = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/NCLD_HawkCreek/MapServer"
// national land cover data 2016

var a_wildLife = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/WildlifeQual_HawkCreek/MapServer" // Wildlife Habitat Quality Risk

var a_pollsens = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/PollutionSens_HawkCreek/MapServer" //Pollution Sensitivity of Near-Surface Materials

var a_waterQual = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/WQ_HawkCreek/MapServer" //Water Quality Risk

var a_soil = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/SoilRisk_HawkCreek/MapServer" //Soil Erosion Risk

var a_envBen = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/EnvBen_HawkCreek/MapServer" //Environmental Risk Index

var a_pollsensGradient = "https://tiles.arcgis.com/tiles/HRPe58bUyBqyyiCt/arcgis/rest/services/PollutionSens_Gradient/MapServer"
//Pollution Sensitivity of Near-Surface Materials Gradient

// Get ESRI WFS as GeoJSON and Add to Map

/////*** BOUNDARY LAYERS ****\\\\

var hawkcreekbndry = L.esri.featureLayer({
    url: a_hwkCreekBndry,
    style: function () {
        return {
            "color": "red",
            "fillColor": "red",
            "weight": 2,
            "fillOpacity": 0,
            "opacity": 1,
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
            "color": "#7256E8",
            "fillColor": "#7256E8",
            "weight": 2,
            "fillOpacity": .2,
            "opacity": 1,
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
            "color": "#a6cee3",
            "fillColor": "#a6cee3",
            "weight": 2,
            "fillOpacity": .2,
            "opacity": 1,
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> HUC 8 Name: ' + feature.properties.HU_8_Name + '</i></p>');
    },
});
var huc10 = L.esri.featureLayer({
    url: a_huc10,
    style: function () {
        return {
            "color": "#fb9a99",
            "fillColor": "#fb9a99",
            "weight": 2,
            "fillOpacity": .2,
            "opacity": 1,
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> HUC 10 Name: ' + feature.properties.HU_10_Name + '</i></p>');
    },
});
var huc12 = L.esri.featureLayer({
    url: a_huc12,
    style: function () {
        return {
            "color": "#fdbf6f",
            "fillColor": "#fdbf6f",
            "weight": 2,
            "fillOpacity": .2,
            "opacity": 1,
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> HUC 12 Name: ' + feature.properties.HU_12_Name + '</i></p>');
    },
});

var twnshp = L.esri.featureLayer({
    url: a_twnshp,
    style: function () {
        return {
            "color": "slategray",
            "fillColor": "slategray",
            "weight": 2,
            "fillOpacity": .2,
            "opacity": 1,
        };
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><i> Township Name: ' + feature.properties.Name + '</i></p>');
    },
});



////// *** Groundwater Layers *** /////

var wtrVul = L.esri.featureLayer({
    url: a_wtrVul,
    style: styleWtrVul,
});

var wellhead = L.esri.featureLayer({
    url: a_wellhead,
    style: stylewellhead,
    //    onEachFeature: function (feature, layer) {
    //        layer.on("mouseover", function (e) {
    //
    //        })
    //    }
});
var bedrockPoll = L.esri.featureLayer({
    url: a_bedrockPoll,
    where: "RATING = 'VH' OR RATING = 'H' OR RATING = 'M'",
    style: styleBedrockPoll,

});
var nitrTwn = L.esri.featureLayer({
    url: a_nitrTwn,
    style: styleNitrTwn,
});
var pollsens = L.esri.tiledMapLayer({
    url: a_pollsens,
});
var pollsensGradient = L.esri.tiledMapLayer({
    url: a_pollsensGradient,
});
////// *** Hydrology layers *** /////

var fEMAflood = L.esri.featureLayer({
    url: a_fEMAflood,
    where: "FLD_ZONE = 'A' OR FLD_ZONE = 'AE' OR FLD_ZONE = 'AH' OR FLD_ZONE = 'AD'",
    style: stylefEMAflood,
});
var altwtr = L.esri.featureLayer({
    url: a_altwtr,
    where: "AWEvtType = 1 OR AWEvtType = 2 OR AWEvtType = 3 OR AWEvtType = 4",
    style: styleAltWtr,
});

var cONUS = L.esri.featureLayer({
    url: a_cONUS,
    where: "WETLAND_TY = 'Freshwater Emergent Wetland' OR WETLAND_TY = 'Freshwater Forested/Shrub Wetland'",
    style: styleCONUS,
});

var buffwetlnds = L.esri.featureLayer({
    url: a_buffwetlnds,
    style: stylebuffwetlnds,
});

var buffwtrcrse = L.esri.featureLayer({
    url: a_buffwtrcrse,
    style: stylebuffwtrcrse,
});
var rWI = L.esri.featureLayer({
    url: a_rWI,
    style: stylerWI,
});


////// *** Surface Water Quality Layers *** /////

var imptStrm = L.esri.featureLayer({
    url: a_imptStrm,
    where: "NOT AFFECTED_U = 'AQC'",
    style: styleimptStrm,
});
var impLks = L.esri.featureLayer({
    url: a_impLks,
    where: "NOT AFFECTED_U = 'AQC'",
    style: styleimpLks,
});

var phos = L.esri.featureLayer({
    url: a_phos,
    style: stylePhos,
});

////// *** Biodiversity Layers *** /////

var trout = L.esri.featureLayer({
    url: a_trout,
    style: styletrout,
});
var natPra = L.esri.featureLayer({
    url: a_natPra,
    style: stylenatPra,
});

var natPlnt = L.esri.featureLayer({
    url: a_natPlnt,
    style: stylenatPlnt,
});

var mBSbio = L.esri.featureLayer({
    url: a_mBSbio,
    style: styleMBSBio,
});

////// *** Land Use/Cover layers *** /////

var gAP_DNR = L.esri.featureLayer({
    url: a_gAP_DNR,
    style: stylegAP_DNR,
});
var gAP_State = L.esri.featureLayer({
    url: a_gAP_State,
    style: stylegAP_State,
});
var gAP_Cnty = L.esri.featureLayer({
    url: a_gAP_Cnty,
    style: stylegAP_Cnty,
});
var gAP_Fed = L.esri.featureLayer({
    url: a_gAP_Fed,
    style: stylegAP_Fed,
});

var easemnts = L.esri.featureLayer({
    url: a_easemnts,
    style: styleeasemnts,
});

var nLCD = L.esri.tiledMapLayer({
    url: a_nLCD,
});

var gSSURGO = L.esri.featureLayer({
    url: a_gSSURGO,
    style: styleGSSURGO,
});



////// *** Watershed Characterization Layers *** /////

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
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Hyd Index Mean: ' + feature.properties.H_I_MEAN + '</b></p>');
    },
});
var geoIndex = L.esri.featureLayer({
    url: a_geoIndex,
    style: styleGeoIndex,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Geo Index Mean: ' + feature.properties.G_I_MEAN + '</b></p>');
    },
});
var conIndex = L.esri.featureLayer({
    url: a_conIndex,
    style: styleConIndex,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Con Index Mean: ' + feature.properties.C_I_MEAN + '</b></p>');
    },
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
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<p><b> Combined Index Mean: ' + feature.properties.A_I_MEAN + '</b></p>');
    },
});

var wildLife = L.esri.tiledMapLayer({
    url: a_wildLife,
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

var dNRCatch = L.esri.featureLayer({
    url: a_dNRCatch,
    style: styleDNRCatch,
});

var hSPF_TSS = L.esri.featureLayer({
    url: a_hSPF_TSS,
    style: stylehSPF_TSS,
});

var hSPF_TN = L.esri.featureLayer({
    url: a_hSPF_TN,
    style: stylehSPF_TN,
});

var hSPF_TP = L.esri.featureLayer({
    url: a_hSPF_TP,
    style: stylehSPF_TP,
});

var hSPF_Discharge = L.esri.featureLayer({
    url: a_hSPF_Discharge,
    style: stylehSPF_Discharge,
});

/////*** Misc. layers ***/////

var mask = L.esri.featureLayer({
    url: a_mask,
    style: function () {
        return {
            "color": "transparent",
            "fillColor": "black",
            //            "weight": 2,
            "fillOpacity": 0.8,
            //            "opacity": 1,
        };
    }
});
var zones = L.esri.featureLayer({
    url: a_zones,
    style: stylezones,
});


/// STYLE FUNCTIONS

function stylezones(feature) {
    type = feature.properties.Zone;
    var colorToUse;
    if (type === "Farmed") colorToUse = '#ff8c00';
    else if (type === "Lakes") colorToUse = '#87CEFA';
    else if (type === "Minnesota River") colorToUse = '#7CFC00';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": "transparent",
        "weight": 5,
        "opacity": 1,
        //        "fillOpacity": 0.2
    };
}


function stylewellhead(feature) {
    return {
        "color": "#a65628",
        "fillColor": "#a65628",
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function styleGradientwellhead(feature) {
    return {
        "color": "#006d2c",
        "fillColor": "#006d2c",
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,

    };
}

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
        "opacity": 0.8,
        "fillOpacity": 0.8
    };
}

function styleGradientWtrVul(feature) {
    level = feature.properties.dws_vul;
    var colorToUse;
    if (level === "Very High") colorToUse = '#006d2c';
    else if (level === "High") colorToUse = '#31a354';
    else if (level === "Moderate") colorToUse = '#74c476';
    else if (level === "Low") colorToUse = '#bae4b3';
    else if (level === "Very Low") colorToUse = '#edf8e9';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 0.8,
        "fillOpacity": 0.8
    };
}

function stylefEMAflood(feature) {
    return {
        "color": "#ffff00",
        "fillColor": "#ffff00",
        weight: 2,
        "fillOpacity": 0.5,
        "opacity": 1,
    };
}

function styleGradientfEMAflood(feature) {
    return {
        "color": "#084594",
        "fillColor": "#084594",
        "fillOpacity": 0.5,
        "opacity": 1,
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
        "opacity": 1,
    };
}

function styleGradientAltWtr(feature) {
    type = feature.properties.AWEvtType;
    var colorToUse;
    if (type === 1) colorToUse = '#084594';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "opacity": 1,
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
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientCONUS(feature) {
    return {
        "color": "#084594",
        "fillColor": "#084594",
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function stylebuffwetlnds(feature) {
    return {
        "color": "#7e8be6",
        "fillColor": '#7e8be6',
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,

    };
}

function styleGradientbuffwetlnds(feature) {
    return {
        "color": "#084594",
        "fillColor": '#084594',
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function stylebuffwtrcrse(feature) {
    return {
        "color": "#674d6e",
        "opacity": 1,
    };
}

function styleGradientbuffwtrcrse(feature) {
    return {
        "color": "#084594",
        "opacity": 1,
    };
}

function stylerWI(feature) {
    return {
        "color": "#f5a37a",
        "fillColor": "#f5a37a",
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,

    };
}

function styleGradientrWI(feature) {
    return {
        "color": "#084594",
        "fillColor": "#084594",
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}


function styleimptStrm(feature) {
    return {
        "color": "#8c0007",
        "opacity": 1,
    };
}

function styleGradientimptStrm(feature) {
    return {
        "color": "#67000d",
        "opacity": 1,
    };
}

function styleimpLks(feature) {
    return {
        "color": "#002366",
        "fillColor": "#002366",
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function styleGradientimpLks(feature) {
    return {
        "color": "#67000d",
        "fillColor": "#67000d",
        "fillOpacity": 0.8,
        "opacity": 1,
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
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientPhos(feature) {
    type = feature.properties.LPSS_CLASS;
    var colorToUse;
    if (type === "Highest") colorToUse = '#67000d';
    else if (type === "Higher") colorToUse = '#fb6a4a';
    else if (type === "High") colorToUse = '#fcbba1';
    else colorToUse = "transparent";

    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}


function stylehSPF_TSS(feature) {
    type = feature.properties.TSS_Ton_Ac;
    var colorToUse;
    if (type >= 0 && type <= 0.05) colorToUse = '#ffff80';
    else if (type > 0.05 && type <= .5) colorToUse = '#fad155';
    else if (type > 0.5 && type <= 1) colorToUse = '#f2a72e';
    else if (type > 1 && type <= 2.5) colorToUse = '#ad5313';
    else if (type > 2.5 && type <= 12.26) colorToUse = '#6b0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8

    };
}

function styleGradienthSPF_TSS(feature) {
    type = feature.properties.TSS_Ton_Ac;
    var colorToUse;
    if (type >= 0 && type <= 0.05) colorToUse = '#fff5f0';
    else if (type > 0.05 && type <= .5) colorToUse = '#fcbba1';
    else if (type > 0.5 && type <= 1) colorToUse = '#fb6a4a';
    else if (type > 1 && type <= 2.5) colorToUse = '#cb181d';
    else if (type > 2.5 && type <= 12.26) colorToUse = '#67000d';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylehSPF_TN(feature) {
    type = feature.properties.TN_Lb_Acre;
    var colorToUse;
    if (type >= 0 && type <= 5) colorToUse = '#ffff80';
    else if (type > 5 && type <= 10) colorToUse = '#fad155';
    else if (type > 10 && type <= 15) colorToUse = '#f2a72e';
    else if (type > 15 && type <= 20) colorToUse = '#ad5313';
    else if (type > 20) colorToUse = '#6b0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradienthSPF_TN(feature) {
    type = feature.properties.TN_Lb_Acre;
    var colorToUse;
    if (type >= 0 && type <= 5) colorToUse = '#fff5f0';
    else if (type > 5 && type <= 10) colorToUse = '#fcbba1';
    else if (type > 10 && type <= 15) colorToUse = '#fb6a4a';
    else if (type > 15 && type <= 20) colorToUse = '#cb181d';
    else if (type > 20) colorToUse = '#67000d';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylehSPF_TP(feature) {
    type = feature.properties.TP_Lb_Acre;
    var colorToUse;
    if (type >= 0.15 && type <= 0.29) colorToUse = '#ffff80';
    else if (type > 0.29 && type <= 0.43) colorToUse = '#fad155';
    else if (type > 0.43 && type <= 0.61) colorToUse = '#f2a72e';
    else if (type > 0.61 && type <= 1.61) colorToUse = '#ad5313';
    else if (type > 1.61 && type <= 5.68) colorToUse = '#6b0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradienthSPF_TP(feature) {
    type = feature.properties.TP_Lb_Acre;
    var colorToUse;
    if (type >= 0.17 && type <= 0.29) colorToUse = '#fff5f0';
    else if (type > 0.29 && type <= 0.43) colorToUse = '#fcbba1';
    else if (type > 0.43 && type <= 0.61) colorToUse = '#fb6a4a';
    else if (type > 0.61 && type <= 1.61) colorToUse = '#cb181d';
    else if (type > 1.61 && type <= 5.68) colorToUse = '#67000d';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylehSPF_Discharge(feature) {
    type = feature.properties.Q_Acft_Acr;
    var colorToUse;
    if (type >= 0.28 && type <= 0.33) colorToUse = '#ffff80';
    else if (type > 0.33 && type <= 0.41) colorToUse = '#fad155';
    else if (type > 0.41 && type <= 0.51) colorToUse = '#f2a72e';
    else if (type > 0.51 && type <= 0.73) colorToUse = '#ad5313';
    else if (type > 0.73 && type <= 0.99) colorToUse = '#6b0000';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradienthSPF_Discharge(feature) {
    type = feature.properties.Q_Acft_Acr;
    var colorToUse;
    if (type >= 0.28 && type <= 0.33) colorToUse = '#fff5f0';
    else if (type > 0.33 && type <= 0.41) colorToUse = '#fcbba1';
    else if (type > 0.41 && type <= 0.51) colorToUse = '#fb6a4a';
    else if (type > 0.51 && type <= 0.73) colorToUse = '#cb181d';
    else if (type > 0.73 && type <= 0.99) colorToUse = '#67000d';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styletrout(feature) {
    return {
        "color": "#f781bf",
        "fillColor": "#f781bf",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradienttrout(feature) {
    return {
        "color": "#756bb1",
        "fillColor": "#756bb1",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8,
    };
}

function stylenatPra(feature) {
    return {
        "color": "#735100",
        "fillColor": "#735100",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8,
    };
}

function styleGradientnatPra(feature) {
    return {
        "color": "#756bb1",
        "fillColor": "#756bb1",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8,
    };
}

function stylenatPlnt(feature) {
    return {
        "color": "#71c98d",
        "fillColor": "#71c98d",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8,
    };
}

function styleGradientnatPlnt(feature) {
    return {
        "color": "#756bb1",
        "fillColor": "#756bb1",
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8,
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
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientMBSBio(feature) {
    type = feature.properties.biodiv_sig;
    var colorToUse;
    if (type === "Outstanding") colorToUse = '#756bb1';
    else if (type === "High") colorToUse = '#bcbddc';
    else if (type === "Moderate") colorToUse = '#efedf5';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylegAP_DNR(feature) {
    return {
        "color": '#88cd66',
        "fillColor": '#88cd66',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientgAP_DNR(feature) {
    return {
        "color": '#756bb1',
        "fillColor": '#756bb1',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylegAP_State(feature) {
    return {
        "color": '#e8beff',
        "fillColor": '#e8beff',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientgAP_State(feature) {
    return {
        "color": '#756bb1',
        "fillColor": '#756bb1',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylegAP_Cnty(feature) {
    return {
        "color": '#ffff73',
        "fillColor": '#ffff73',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientgAP_Cnty(feature) {
    return {
        "color": '#756bb1',
        "fillColor": '#756bb1',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function stylegAP_Fed(feature) {
    return {
        "color": '#bee8ff',
        "fillColor": '#bee8ff',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientgAP_Fed(feature) {
    return {
        "color": '#756bb1',
        "fillColor": '#756bb1',
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleeasemnts(feature) {
    return {
        "color": "#f28f24",
        "fillColor": "#f28f24",
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function styleGSSURGO(feature) {
    type = feature.properties.muaggatt_h;
    var colorToUse;
    if (type === "A") colorToUse = '#aaff00';
    else if (type === "A/D") colorToUse = '#9f57f7';
    else if (type === "B") colorToUse = '#4ecdd9';
    else if (type === "B/D") colorToUse = '#38538a';
    else if (type === "C") colorToUse = '#f5e56c';
    else if (type === "C/D") colorToUse = '#f0599d';
    else if (type === "D") colorToUse = '#4d7300';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
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
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleBedrockPoll(feature) {
    type = feature.properties.RATING;
    var colorToUse;
    if (type === "VH") colorToUse = '#f26f52';
    else if (type === "H") colorToUse = '#ffcd4e';
    else if (type === "M") colorToUse = '#fff34f';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "opacity": 1,
        "fillOpacity": 0.8
    };
}

function styleGradientbedrockPoll(feature) {
    type = feature.properties.RATING;
    var colorToUse;
    if (type === "VH") colorToUse = '#2ca25f';
    else if (type === "H") colorToUse = '#99d8c9';
    else if (type === "M") colorToUse = '#e5f5f9';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
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
        "fillOpacity": 0.8,
        "opacity": 1,
    };
}

function styleGradientNitrTwn(feature) {
    type = feature.properties.InitNRange;
    var colorToUse;
    if (type === "<5%") colorToUse = '#e5f5f9';
    else if (type === "5<10%") colorToUse = '#99d8c9';
    else if (type === "≥10%") colorToUse = '#2ca25f';
    else colorToUse = "transparent";
    return {
        "color": colorToUse,
        "fillColor": colorToUse,
        "weight": 2,
        "fillOpacity": 0.8,
        "opacity": 1,
    };
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
    layer.setOpacity(val);
    //    console.log(layer);
}

//opacity slider for pollution sens
function updateOpacityTilepollsens(val) {
    var checkVal = document.getElementById("pollsensGradient").checked;
    if (checkVal === true) {
        pollsensGradient.setOpacity(val);
    } else {
        pollsens.setOpacity(val);
    }
}

var rangeSlider = function () {
    var slider = $('.range-slider'),
        range = $('.slider'),
        value = $('.range-slider_val');

    slider.each(function () {

        value.each(function () {
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function () {
            $(this).next(value).html(this.value);
        });
    });
};

rangeSlider();



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



//make button to add layer but don't see the layer 
// make a random point somewhere for each layer. don't add style. associate the legend to
// not sure how to work this with printing but maybe add a part where this will add to the div for on print 


/// ***Legend control items*** ////

var legendBndry = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Planning Area',
    legends: [{
        name: 'Planning Area',
        elements: [{
            html: document.querySelector('#BndryLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendcnty = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Counties',
    legends: [{
        name: 'Counties',
        elements: [{
            html: document.querySelector('#cntyLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhuc8 = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Major Watershed HUC 8 Boundaries',
    legends: [{
        name: 'Major Watershed HUC 8 Boundaries',
        elements: [{
            html: document.querySelector('#huc8Legend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhuc10 = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HUC 10 Boundaries',
    legends: [{
        name: 'HUC 10 Boundaries',
        elements: [{
            html: document.querySelector('#huc10Legend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhuc12 = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HUC 12 Boundaries',
    legends: [{
        name: 'HUC 12 Boundaries',
        elements: [{
            html: document.querySelector('#huc12Legend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendtwnshp = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Township Boundaries',
    legends: [{
        name: 'Township Boundaries',
        elements: [{
            html: document.querySelector('#twnshpLegend').innerHTML
            }]
        }],
    detectStretched: true,
});

var legendzones = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Zones',
    legends: [{
        name: 'Zones',
        elements: [{
            html: document.querySelector('#zonesLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendwtrVul = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'DWSMA Vulnerability',
    legends: [{
        name: 'DWSMA Vulnerability',
        elements: [{
            html: document.querySelector('#wtrVulLegend').innerHTML
            }]
        }],
    detectStretched: true,
});

var legendwellhead = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Well Head Protection Areas',
    legends: [{
        name: 'Well Head Protection Areas',
        elements: [{
            html: document.querySelector('#wellheadLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendbedrockPoll = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Bedrock Surface Pollution Sensitivity',
    legends: [{
        name: 'Bedrock Surface Pollution Sensitivity',
        elements: [{
            html: document.querySelector('#bedrockPollLegend').innerHTML
            }]
        }],
    detectStretched: true,
});

var legendnitrTwn = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Nitrate Rates by Township',
    legends: [{
        name: 'Nitrate Rates by Township',
        elements: [{
            html: document.querySelector('#nitrTwnLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendpollsens = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Pollution Sensitivity of Near-Surface Materials',
    legends: [{
        name: 'Pollution Sensitivity of Near-Surface Materials',
        elements: [{
            html: document.querySelector('#pollsensLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendfEMAflood = L.control.htmllegend({
    position: 'bottomleft',
    layer: '100 Year Flood Plain',
    legends: [{
        name: '100 Year Flood Plain',
        elements: [{
            html: document.querySelector('#fEMAfloodLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendaltwtr = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Altered Watercourse',
    legends: [{
        name: 'Altered Watercourse',
        elements: [{
            html: document.querySelector('#altwtrLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendcONUS = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'NWI',
    legends: [{
        name: 'NWI',
        elements: [{
            html: document.querySelector('#cONUSLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendbuffwetlnds = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Public Waters',
    legends: [{
        name: 'Public Waters',
        elements: [{
            html: document.querySelector('#buffwetlndsLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendbuffwtrcrse = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Public Ditches',
    legends: [{
        name: 'Public Ditches',
        elements: [{
            html: document.querySelector('#buffwtrcrseLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendrWI = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Restorable Wetland Inventory',
    legends: [{
        name: 'Restorable Wetland Inventory',
        elements: [{
            html: document.querySelector('#rWILegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendimptStrm = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Impaired Streams (Proposed)',
    legends: [{
        name: 'Impaired Streams (Proposed)',
        elements: [{
            html: document.querySelector('#imptStrmLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendimpLks = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Impaired Lakes (Proposed)',
    legends: [{
        name: 'Impaired Lakes (Proposed)',
        elements: [{
            html: document.querySelector('#impLksLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendphos = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Lake Phosphorus Sensitivity Significance',
    legends: [{
        name: 'Lake Phosphorus Sensitivity Significance',
        elements: [{
            html: document.querySelector('#phosLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhSPF_TSS = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HSPF TSS',
    legends: [{
        name: 'HSPF TSS',
        elements: [{
            html: document.querySelector('#hSPF_TSSLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhSPF_TN = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HSPF TN',
    legends: [{
        name: 'HSPF TN',
        elements: [{
            html: document.querySelector('#hSPF_TNLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhSPF_TP = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HSPF TP',
    legends: [{
        name: 'HSPF TP',
        elements: [{
            html: document.querySelector('#hSPF_TPLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhSPF_Discharge = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'HSPF Discharge',
    legends: [{
        name: 'HSPF Discharge',
        elements: [{
            html: document.querySelector('#hSPF_DischargeLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendtrout = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Trout Streams',
    legends: [{
        name: 'Trout Streams',
        elements: [{
            html: document.querySelector('#troutLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendnatPra = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Native Prairies',
    legends: [{
        name: 'Native Prairies',
        elements: [{
            html: document.querySelector('#natPraLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendnatPlnt = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Native Plant Communities',
    legends: [{
        name: 'Native Plant Communities',
        elements: [{
            html: document.querySelector('#natPlntLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendmBSbio = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'MBS Sites of Biodiversity Significance',
    legends: [{
        name: 'MBS Sites of Biodiversity Significance',
        elements: [{
            html: document.querySelector('#mBSbioLegend').innerHTML
            }]
        }],
    detectStretched: true,
});

var legendgAP_DNR = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'GAP DNR Lands',
    legends: [{
        name: 'GAP DNR Lands',
        elements: [{
            html: document.querySelector('#gAP_DNRLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendgAP_State = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'GAP State Lands',
    legends: [{
        name: 'GAP State Lands',
        elements: [{
            html: document.querySelector('#gAP_StateLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendgAP_Cnty = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'GAP County Lands',
    legends: [{
        name: 'GAP County Lands',
        elements: [{
            html: document.querySelector('#gAP_CntyLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendgAP_Fed = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'GAP Federal Lands',
    legends: [{
        name: 'GAP Federal Lands',
        elements: [{
            html: document.querySelector('#gAP_FedLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendeasemnts = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Easements',
    legends: [{
        name: 'Easements',
        elements: [{
            html: document.querySelector('#easemntsLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendnLCD = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'NLCD 2016',
    legends: [{
        name: 'NLCD 2016',
        elements: [{
            html: document.querySelector('#nLCDLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendgSSURGO = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'GSSURGO',
    legends: [{
        name: 'GSSURGO',
        elements: [{
            html: document.querySelector('#gSSURGOLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendbioIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Bio Index Mean',
    legends: [{
        name: 'Bio Index Mean',
        elements: [{
            html: document.querySelector('#bioIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendconIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Con Index Mean',
    legends: [{
        name: 'Con Index Mean',
        elements: [{
            html: document.querySelector('#conIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendhydIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Hyd Index Mean',
    legends: [{
        name: 'Hyd Index Mean',
        elements: [{
            html: document.querySelector('#hydIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendgeoIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Geo Index Mean',
    legends: [{
        name: 'Geo Index Mean',
        elements: [{
            html: document.querySelector('#geoIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendwQIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Water Quality Index Mean',
    legends: [{
        name: 'Water Quality Index Mean',
        elements: [{
            html: document.querySelector('#wQIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendcombIndex = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Combined Index Mean',
    legends: [{
        name: 'Combined Index Mean',
        elements: [{
            html: document.querySelector('#combIndexLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendwildLife = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Wildlife Habitat Quality Risk',
    legends: [{
        name: 'Wildlife Habitat Quality Risk',
        elements: [{
            html: document.querySelector('#wildLifeLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendwaterQual = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Water Quality Risk',
    legends: [{
        name: 'Water Quality Risk',
        elements: [{
            html: document.querySelector('#waterQualLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendsoil = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Soil Erosion Risk',
    legends: [{
        name: 'Soil Erosion Risk',
        elements: [{
            html: document.querySelector('#soilLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legenddNRCatch = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'DNR Lake Habitat Strategy',
    legends: [{
        name: 'DNR Lake Habitat Strategy',
        elements: [{
            html: document.querySelector('#dNRCatchLegend').innerHTML
            }]
        }],
    detectStretched: true,
});
var legendmask = L.control.htmllegend({
    position: 'bottomleft',
    layer: 'Planning Area Mask',
    legends: [{
        name: 'Planning Area Mask',
        elements: [{
            html: document.querySelector('#maskLegend').innerHTML
            }]
        }],
    detectStretched: true,
});


// add legends to print
function addPrintLegend(print) {
    //    console.log(legendcnty);
    //    console.log(legendcnty.addTo(print.printMap));
    //    console.log(print);
    //    var legends = [];
    //    console.log(legends)
    $.each($('input[class="showLegend"]:checked'), function () {
        //        console.log(window[this.value]);
        x = window[this.value];
        return x.addTo(print.printMap);
    });
}

function postPrintLegend() {
    $.each($('input[class="showLegend"]:checked'), function () {
        //        console.log(window[this.value]);
        x = window[this.value];
        return x.addTo(map);
    });

}

//    if (($('input[value="legendBndry"]').is(':checked')) && ($('input[value="legendcnty"]').is(':checked')) && ($('input[value="legendhuc8"]').is(':checked')) && ($('input[value="legendhuc10"]').is(':checked'))) {
//        return
//        legendBndry.addTo(e.printMap);
//        legendcnty.addTo(e.printMap);
//        legendhuc8.addTo(e.printMap);
//        legendhuc10.addTo(e.printMap);
//
//    } else if ($('input[value="legendhuc10"]').is(':checked')) {
//        return legendhuc10.addTo(e.printMap);
//    } else if ($('input[value="legendcnty"]').is(':checked')) {
//        return legendcnty.addTo(e.printMap);
//    }
//}


function changeStyle(val, layer) {
    console.log(val);
    layer.setStyle(val);
}

function changeToOrigStyle(val, layer) {
    console.log(val);
    layer.setStyle(val);
}

function checkClick(id) {
    console.log(id);
    console.log("the checkClick function has been initialized");
}


$(document).ready(function () {
    sidebar.open('home');
    //    createSidebar();

    $('#range').on("input", function () {
        $('.output').val(this.value);
    }).trigger("change");

    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-plus")
                .removeClass("fa-plus")
                .addClass("fa-minus");
        })
        .on('hidden.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-minus")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        });

    $('leaflet-printing').click(function () {
        console.log("print button clicked");
    });
    $('input[type="checkbox"]').click(function () {
        layerClicked = window[event.target.value];
        colorGradeID = window[event.target.id]; // the function name of the style for gradient color scheme 
        colorOrigID = window[event.target.name]; //the original color scheme function

        //        layerClicked.on('loading', function (e) {
        //            loadingControl._showIndicator()
        //        });
        //        layerClicked.on('load', function (e) {
        //            loadingControl._hideIndicator
        //        });
        if ($(this).is(":checked") && $(this).hasClass('pollution-sens')) {
            layerClicked.on('loading', function (e) {
                loadingControl._showIndicator()
            });
            layerClicked.on('load', function (e) {
                loadingControl._hideIndicator
            });
            map.removeLayer(layerClicked);
            map.addLayer(colorGradeID);
        } else if ($(this).is(":not(:checked)") && $(this).hasClass('pollution-sens')) {
            map.removeLayer(colorGradeID);
        } else if ($(this).is(":checked") && $(this).hasClass('colorGrade')) {
            layerClicked.on('loading', function (e) {
                loadingControl._showIndicator()
            });
            layerClicked.on('load', function (e) {
                loadingControl._hideIndicator
            });
            changeStyle(colorGradeID, layerClicked); //calls function to change the style
        } else if ($(this).is(":not(:checked)") && $(this).hasClass('colorGrade')) {
            changeToOrigStyle(colorOrigID, layerClicked);
        } else if ($(this).is(":checked") && $(this).hasClass('showLegend')) {
            map.addControl(layerClicked); //calls function to add legend
        } else if ($(this).is(":not(:checked)") && $(this).hasClass('showLegend')) {
            map.removeControl(layerClicked); //remove legend control
        } else if ($(this).is(":checked")) {
            layerClicked.on('loading', function (e) {
                loadingControl._showIndicator()
            });
            layerClicked.on('load', function (e) {
                loadingControl._hideIndicator
            });
            map.addLayer(layerClicked);
        } else if ($(this).is(":not(:checked)")) {
            map.removeLayer(layerClicked);
        }
    });



    //   **** If I want to add legend to the sub title div. Do the following in the $(input checkbox) function: *****

    //      $('input[type="checkbox"]').click(function () {
    //        layerClicked = window[event.target.value];
    //        colorGradeID = window[event.target.id]; // the function name of the style for gradient color scheme 
    //        colorOrigID = window[event.target.name]; //the original color scheme function
    //
    //        legendname = this.name;
    //        legendvalue = this.value;
    //    
    //     else if ($(this).is(":checked") && $(this).hasClass('showLegend')) {
    //            map.addControl(layerClicked); //calls function to add legend
    //            console.log(colorOrigID);
    //            leg = document.querySelector(legendname).innerHTML; //testname is the this.value which is the id for the legend container
    //            console.log(leg);
    //            $("#addSubLegend").append('<div id= legend' + legendvalue + ' >' + leg + ' </div');
    //        } else if ($(this).is(":not(:checked)") && $(this).hasClass('showLegend')) {
    //            map.removeControl(layerClicked); //remove legend control
    //            removeID = '#legend' + legendvalue // to get the jquery selector for the div the legend is in in the sub title print area
    //            $(removeID).remove(); //removes legend from sub print area

    // CSS FOR LEGEND:
    /*to get to the sub title legend print*/
    //h3 > div > div > p {
    //    color: black;
    //    font-size: 10pt;
    //    margin-bottom: -1em;
    //    margin-top: -1em;
    //}
    //            
    //*** END OF LEGEND IN BOTTOM PART ///




    //    
    //        $('input[type="checkbox"]').click(function () {
    //        layerClicked = window[event.target.value];
    //        colorGradeID = window[event.target.id]; // the function name of the style for gradient color scheme 
    //        colorOrigID = window[event.target.name]; //the original color scheme function
    //        layerClicked.on('loading', function (e) {
    //            loadingControl._showIndicator()
    //        });
    //        layerClicked.on('load', function (e) {
    //            loadingControl._hideIndicator
    //        });
    //        if ($(this).is(":checked") && $(this).hasClass('pollution-sens')) {
    //            map.removeLayer(layerClicked);
    //            map.addLayer(colorGradeID);
    //        } else if ($(this).is(":not(:checked)") && $(this).hasClass('pollution-sens')) {
    //            map.removeLayer(colorGradeID);
    //        } else if ($(this).is(":checked") && $(this).hasClass('colorGrade')) {
    //            changeStyle(colorGradeID, layerClicked); //calls function to change the style
    //        } else if ($(this).is(":not(:checked)") && $(this).hasClass('colorGrade')) {
    //            changeToOrigStyle(colorOrigID, layerClicked);
    //        } else if ($(this).is(":checked")) {
    //
    //            map.addLayer(layerClicked);
    //        } else if ($(this).is(":not(:checked)")) {
    //            map.removeLayer(layerClicked);
    //        }
    //    });

    if ($(window).width() < 414.1) {
        map.setView([46.4, -91.99]);
        map.setZoom(6)
    } else if ($(window).width() < 768.1) {
        map.setView([46.4, -95])
    } else if ($(window).width() < 950) {
        map.setView([46.35, -96.25])
    } else if ($(window).width() < 1260) {
        map.setView([46.35, -95.2])
    }

    //    console.log($(window).width());


    //        $('input[type="checkbox"]').click(function () {
    //        layerClicked = window[event.target.value];
    //        if ($(this).is(":checked")) {
    //            map.addLayer(layerClicked);
    //        } else if ($(this).is(":not(:checked)")) {
    //            map.removeLayer(layerClicked);
    //        }
    //    });




    //    $('input[type="checkbox"]').click(function () {
    //        layerClicked = window[event.target.value];
    //        layerLegendID = this.name;
    //        if ($(this).is(":checked") && $(this).hasClass('showLegend')) {
    //            map.addLayer(layerClicked);
    //            addLegend(layerLegendID, layerClicked);
    //        } else if ($(this).is(":not(:checked)") && $(this).hasClass('showLegend')) {
    //            map.removeLayer(layerClicked);
    //        } else if ($(this).is(":checked")) {
    //            map.addLayer(layerClicked);
    //        } else if ($(this).is(":not(:checked)")) {
    //            map.removeLayer(layerClicked);
    //        }
    //    });
    //    $('.showLegend').click(function () {
    //        if ($(this).is(":checked")) {
    //            addLegend
    //        }
    //    })







    //    $('#toggleSidebar').click(function () {
    //        $("#home").toggle(function () {
    //
    //        });
    //    });
    //    $('#closeSidebar').click(function () {
    //        $("#home").toggle(function () {
    //
    //        });
    //    });




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

//// gradient layer for mapping scheme
////var wtrVulChange = L.esri.featureLayer({
////    url: a_wtrVul,
////    style: styleGradientWtrVul,
////});
//
//function updateOpacityBoundWtrVul(val) {
//    var checkVal = document.getElementById("wtrVulGrad").checked;
//    if (checkVal === true) {
//        wtrVulChange.setStyle({
//            opacity: val,
//        });
//    } else {
//        wtrVul.setStyle({
//            opacity: val,
//        });
//    }
//}
//
//function updateOpacityWtrVul(val) {
//    var checkVal = document.getElementById("wtrVulGrad").checked;
//    if (checkVal === true) {
//        wtrVulChange.setStyle({
//            fillOpacity: val,
//        });
//    } else {
//        wtrVul.setStyle({
//            fillOpacity: val,
//        });
//    }
//}

//able to add and remove legend but the legend object is cached so its not undefined when removed
//function addLegend2(layer) {
//    layerleg = window[event.target.value];
//    console.log(layerleg);
//    check = layerleg._entries;
//
//    console.log(check);
//    if (check != undefined) {
//        console.log("removing legend call")
//        map.removeControl(layerleg);
//    } else {
//        map.addControl(layerleg);
//        console.log("adding legend call")
//    }
//}

//function addLegend(id, title) {
//
//    //    legendlayer.onAdd
//    var legendlayer = L.control.htmllegend({
//        position: 'bottomright',
//        layer: title,
//        legends: [{
//            name: title,
//            elements: [{
//                html: document.querySelector(id).innerHTML
//            }]
//        }],
//        detectStretched: true,
//    });
//    check = legendlayer._entries
//    console.log(check);
//    map.addControl(legendlayer)
//}


//function showLegend(id, title) {
//    var legend = L.control({
//        position: 'bottomright'
//    });
//    var element = document.querySelector(id).innerHTML;
//    console.log(element);
//
//    legend.onAdd = function (map) {
//        var div = L.DomUtil.create('div', 'info legend', 'legend-' + title),
//            labels = ['<strong>' + title + '</strong>'],
//            elements = document.querySelector(id).innerHTML;
//        console.log(element);
//        div.innerHTML = labels + '<br>' + elements;
//        return div;
//
//    };
//    legend.addTo(map);

//
//
//    var LegendControl = L.Control.extend({
//        options: {
//            position: 'bottomright'
//        },
//        onAdd: function () {
//            div.innerHTML = labels + '<br>' + element;
//            return div;
//        }
//    });
//    map.addControl(new LegendControl());

//}

//var legendlayer = L.control.htmllegend({
//    position: 'bottomright'
//})
//var coordsLeg = [43.465951, -96.348829]
//var styleLeg = {
//    color: 'red'
//}
//
//legendBndry = L.circle(coordsLeg, styleLeg);
//legendCnty = L.circle(coordsLeg, styleLeg);
//legendHUC8 = L.circle(coordsLeg, styleLeg);
//
//var legendlayerBndry = L.control.htmllegend({})



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
