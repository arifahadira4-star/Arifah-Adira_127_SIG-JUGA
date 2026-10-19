var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_desa_semarang_1 = new ol.format.GeoJSON();
var features_desa_semarang_1 = format_desa_semarang_1.readFeatures(json_desa_semarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_semarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_semarang_1.addFeatures(features_desa_semarang_1);
var lyr_desa_semarang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_semarang_1, 
                style: style_desa_semarang_1,
                popuplayertitle: 'desa_semarang',
                interactive: true,
                title: '<img src="styles/legend/desa_semarang_1.png" /> desa_semarang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_desa_semarang_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_desa_semarang_1];
lyr_desa_semarang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_semarang_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'luas': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_desa_semarang_1.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'no label', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'inline label - visible with data', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_semarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});