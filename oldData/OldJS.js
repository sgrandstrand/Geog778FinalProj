Old JS code taken off



//function getData() {
//
//    // Test with local files
//    var hawkCreekBndry = L.geoJson(hawkCreekBndry, {
//        pane: 'watershedPane',
//        "color": "#D90404",
//        "weight": 2,
//        "fillOpacity": 0,
//    }).addTo(map);
//};

//function getData(map) {
//    //load the data
//    $.ajax("data/hawkCreekBndry.geojson", {
//        dataType: "json",
//        success: function (response) {}
//    });
//};

map.createPane("watershedPane").style.zIndex = 250;


function createSidebars() {
    var sidebar = L.control.sidebar({
        autopan: false,
        container: 'sidebar'
    }).addTo(map);
};
L.control
    .zoom({
        position: 'topleft'
    })
    .addTo(map);

//Render Layer Control & Move to Sidebar
var layerControl = L.control
    .layers(basemaps, overlays, {
        position: 'topright',
        collapsed: false
    })
    .addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
$(".leaflet-control-layers-list").prepend("<strong class='title'>Base Maps</strong><br>");
$(".leaflet-control-layers-separator").after("<br><strong class='title'>Layers</strong>");



//        var leftsidebar = L.control.sidebar({
//            autopan: false, // whether to maintain the centered map point when opening the sidebar
//            closeButton: true, // whether t add a close button to the panes
//            container: 'sidebar-left', // the DOM container or #ID of a predefined sidebar container that should be used
//            position: 'left', // left or right
//        }).addTo(map);

//.addTo(map).open("home");


//"https://services.arcgis.com/HRPe58bUyBqyyiCt/arcgis/rest/services/HawkCreekBndry/FeatureServer/0?token=a4irdKXGl95rqp6m-4hpisy04YpdnaP3vqlQlIBJuUIyJjFnUOX-CuwULLzHtU21bm7MHTS96Zu-PEu7UWSYd__Afh3y2NGGyFODunA2rWGZFjYSofDyFezPeIqZ1u6ya2gqA7C6rjk0J_qZeKNMK7aZs9OIK6iCm9M63Q8qitt951-Vq3GT8ydvIg6-m6195BnhIaP1NitgJoCYNIRx2bUal-TLqRY0TTpg_8rTqYO-JmwZ9m-cLTOAzXqI0GLDyaowJEL-BdbOSUA35OlQzw.."


"dark": L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHNteXRoMiIsImEiOiJjaXNmNGV0bGcwMG56MnludnhyN3Y5OHN4In0.xsZgj8hsNPzjb91F31-rYA', {
    id: 'mapbox.dark',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
})


//var mapmargin = 50;
//$('#mapid').css("height", ($(window).height() - mapmargin));
//$(window).on("resize", resize);
//resize();
//
//function resize() {
//
//    if ($(window).width() >= 980) {
//        $('#mapid').css("height", ($(window).height() - mapmargin));
//        $('#mapid').css("margin-top", 50);
//    } else {
//        $('#mapid').css("height", ($(window).height() - (mapmargin + 12)));
//        $('#mapid').css("margin-top", -21);
//    }
//
//}
