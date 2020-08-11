var map;
var lyrSearch;
var lyrMarkerCluster;
var lyrDataArea;
var lyrWMS;
var lyrDataIr;
var lyrDataIrGFI;
var ctrlPan;
var ctrlZoomSlider;
var ctrlScale;
var ctrlAttribution;
var mouseCoord;
var ctrlSidebar;
var ctrlSidebarRight;
var ctrlEasyBtn;
var ctrlEasyBtnRight;
var ctrlLayers;

<!-- Instansiasi Map -->
$('document').ready(function(){
    map = L.map('mapdiv',{
        attributionControl:true,
        zoomControl:false,
        minZoom:10,
        maxZoom:18,
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: 'topleft'
        }}).setView([-8.0907570889229, 112.16431617736816], 13);

    // create the sidebar instance and add it to the map
    // var sidebar = L.control.sidebar({ container: 'sidebar' })
    //     .addTo(map)


    // add panels dynamically to the sidebar
    // sidebar
    //     .addPanel({
    //         id:   'js-api',
    //         tab:  '<i class="fa fa-gear"></i>',
    //         title: 'JS API',
    //         pane: '<p>The Javascript API allows to dynamically create or modify the panel state.<p/><p><button onclick="sidebar.enablePanel(\'mail\')">enable mails panel</button><button onclick="sidebar.disablePanel(\'mail\')">disable mails panel</button></p><p><button onclick="addUser()">add user</button></b>',
    //     })
    //     // add a tab with a click callback, initially disabled
    //     .addPanel({
    //         id:   'mail',
    //         tab:  '<i class="fa fa-envelope"></i>',
    //         title: 'Messages',
    //         button: function() { alert('opened via JS callback') },
    //         disabled: true,
    //     })
    //
    // // be notified when a panel is opened
    // sidebar.on('content', function (ev) {
    //     switch (ev.id) {
    //         case 'autopan':
    //         sidebar.options.autopan = true;
    //         break;
    //         default:
    //         sidebar.options.autopan = false;
    //     }
    // });
    //
    // var userid = 0
    // function addUser() {
    //     sidebar.addPanel({
    //         id:   'user' + userid++,
    //         tab:  '<i class="fa fa-user"></i>',
    //         title: 'User Profile ' + userid,
    //         pane: '<p>user ipsum dolor sit amet</p>',
    //     });
    // }
    //map attribution position
    // L.control.attribution({
    //     position: 'topright'
    // }).addTo(map);

    //---------------Mouse Plugin
    //mouseCoord = L.control.mousePosition({numDigits:3}).addTo(map);
    //ctrlScale = L.control.scale({imperial:false,maxWidth:200}).addTo(map);

      //-----getcenter
    L.easyButton('glyphicon-home', function(){
        map.setView([-8.0907570889229, 112.16431617736816], 13);
    }).addTo(map);

    //Tilelayer Basemap
    var lyrBaseMap = L.tileLayer.provider('OpenStreetMap.Mapnik');

    var Esri_WorldImagery = L.tileLayer.provider('Esri.WorldImagery',{attribution:false});

    var lyrCartoDB =  L.tileLayer.provider('CartoDB.Positron').addTo(map);

    var lyrStamen =  L.tileLayer.provider('Stamen.Toner');

    var lyrStadia =  L.tileLayer.provider('CartoDB.DarkMatter');

    //-------------------------------------------------WMS Request
    //For Geowebcache
    //var urlWMS = "http://5.189.156.171:8080//geoserver/gwc/service/wms";

    //For non geowebcache
    var urlWMS = "http://5.189.156.171:8080/geoserver/wms";

    // lyrWMS = L.tileLayer.betterWms(urlWMS, {
    //     layers: 'tutupan_lahan:penggunaan_tanah_2014',
    //     format: 'image/png',
    //     transparent: true,
    //     opacity:0.8
    // })//addTo(map);

    // var lyrWMSOrto;
    // lyrWMSOrto = L.tileLayer.betterWms(urlWMS, {
    //     layers: 'orto_kampus:orto_matra_udara_repro',
    //     format: 'image/png',
    //     transparent: true,
    //     opacity:0.8
    // })//addTo(map);

    // uri = "http://172.105.126.51:8081/geoserver/wms?&&SERVICE=WMS&VERSION=1.3.0&SLD_VERSION=1.1.0&REQUEST=GetLegendGraphic&FORMAT=image/png&LAYER=tutupan_lahan:penggunaan_tanah_2014&LEGEND_OPTIONS=fontName:Times%20New%20Roman;fontAntiAliasing:true;fontColor:0x000033;fontSize:10;bgColor:0xFFFFEE;dpi:100",
    // L.wmsLegend(uri);

    // var lyrWMSKontur;
    // lyrWMSKontur = L.tileLayer.betterWms(urlWMS, {
    //     layers: 'kota_mlg:grs_knt',
    //     format: 'image/png',
    //     transparent: true,
    //     opacity:0.8
    // })//.addTo(map);


    var mega_koordinat_sekolah;
    mega_koordinat_sekolah = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_koordiant_sekolah',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_jaringan_jalan;
    mega_jaringan_jalan = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_jaringan_jalan',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_rel_kereta;
    mega_rel_kereta = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_rel_kereta',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_rencana_pola_ruang;
    mega_rencana_pola_ruang = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_rencana_pola_ruang',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_pola_ruang;
    mega_pola_ruang = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_pola_ruang',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_admin_kelurahan;
    mega_admin_kelurahan = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_admin_kelurahan',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    }).addTo(map);

    var mega_admin_kecamatan;
    mega_admin_kecamatan = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_admin_kecamatan',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    var mega_admin_kota;
    mega_admin_kota = L.tileLayer.betterWms(urlWMS, {
        layers: 'mega_webgis:mega_admin_kota',
        format: 'image/png',
        transparent: true,
        opacity:0.8
    })//.addTo(map);

    //-------------------------------------------------WFS Request
    //------------Style function
    // //url : https://leafletjs.com/reference-1.6.0.html#path-option
    // function styleDft (feature) {
    //     return {
    //         color : '#0066ff', //stroke color
    //         weight : 0, //stroke width
    //         opacity : 0, //stroke opacity
    //         fillColor : '#5DBCD2',
    //         fillOpacity : 0
    //     }
    // }

    // function styleSet (feature) {
    //     return {
    //         color : '#0066ff',
    //         weight : 4,
    //         opacity : 1,
    //         fillColor : '#5DBCD2',
    //         fillOpacity : 0
    //     }
    // }

    // Create root url for WFS service
    // var owsrootUrl = 'http://172.105.126.51:8081/geoserver/ows';

    // // Adding parameters for WFS
    // var defaultParameters = {
    //     service : 'WFS',
    //     version : '1.0',
    //     request : 'GetFeature',
    //     maxFeatures: '500',
    //     typeName : 'tutupan_lahan:penggunaan_tanah_2014',
    //     outputFormat : 'application/json',
    //     SrsName : 'EPSG:4326'
    // };

    // // This code below using Leaflet code
    // var parameters = L.Util.extend(defaultParameters);

    // // Now we have whole URL to use in XMLHttpRequest
    // var URL = owsrootUrl + L.Util.getParamString(parameters);

    // //Starting Create XMLHttpRequest
    // var xhr = new XMLHttpRequest();

    // //open connection
    // xhr.open('GET', URL, false)

    // var polygon;

    // xhr.onload = function () {
    //     if (this.status == 200) {
    //         //Check in console
    //         //console.log(this.responseText);

    //         //Draw in leaflet
    //         //we need variable to hold responsetxt(json string) then convert to json object using JSON.parse
    //         var mkr_rsp = JSON.parse(this.response);

    //         //Then we can add it to map using L.geoJSON
    //         //Remember L.geoJSON have many options such as style and onEachFeature where both are objects
    //         polygon = new L.geoJSON(mkr_rsp,
    //             {onEachFeature: function (feature, layer) {
    //                 layer.on('mousedown', function () {
    //                     layer.setStyle(styleSet())
    //                     });
    //                 layer.on('mouseup', function () {
    //                     layer.setStyle(styleDft())
    //                     });
    //                 }
    //             ,
    //             style : styleDft()
    //             }).addTo(map);
    //     }
    //     else {
    //         console.log('HTTP status other than 200');
    //     }
    // }
    // xhr.send();

    var iconLayersControl = new L.Control.IconLayers(
            [
                {
                    title: 'Stadia', // use any string
                    layer: lyrStadia, // any ILayer
                    icon: '../plugin/Leaflet-IconLayers-master/examples/icons/stadia.png'
                    // 80x80 icon
                },
                {
                    title: 'Stamen', // use any string
                    layer: lyrStamen, // any ILayer
                    icon: '../plugin/Leaflet-IconLayers-master/examples/icons/stamen_toner.png'
                    // 80x80 icon
                },
                {
                    title: 'OSM', // use any string
                    layer: lyrBaseMap, // any ILayer
                    icon: '../plugin/Leaflet-IconLayers-master/examples/icons/openstreetmap_mapnik.png'
                    // 80x80 icon
                },
                {
                    title: 'Satellite',
                    layer: Esri_WorldImagery,
                    icon: '../plugin/Leaflet-IconLayers-master/examples/icons/here_satelliteday.png'
                },
                {
                    title: 'CartoDB',
                    layer: lyrCartoDB,
                    icon: '../plugin/Leaflet-IconLayers-master/examples/icons/cartodb_positron.png'
                }
            ], {
                position: 'bottomleft',
                maxLayersInRow: 3
            }
    );

    iconLayersControl.addTo(map);

    var ctrlLayers = L.control.layers(
        {},
        {
        "Administrasi Kota" : mega_admin_kota,
        "Administrasi Kecamatan" : mega_admin_kecamatan,
        "Administrasi Kelurahan" : mega_admin_kelurahan,
        "Rencana Pola Ruang": mega_rencana_pola_ruang,
        "Pola Ruang": mega_pola_ruang,
        "Rel Kereta": mega_rel_kereta,
        "Jaringan Jalan": mega_jaringan_jalan,
        "Koordinat Sekolah": mega_koordinat_sekolah

        },
        // "polygon" : polygon},
        {position:'topright',sortLayers:true}).addTo(map);

    //Plugin magic goes here! Note that you cannot use the same layer object again, as that will confuse the two map controls

    // var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // var osmAttrib='Map data &copy; OpenStreetMap contributors';
    // var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib });
    // var miniMap = new L.Control.MiniMap(osm2, {position: 'bottomleft', toggleDisplay: true, width:125, height:100 }).addTo(map);
});
