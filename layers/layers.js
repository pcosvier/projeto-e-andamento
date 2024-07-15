var wms_layers = [];


        var lyr_EsriLightGray_0 = new ol.layer.Tile({
            'title': 'Esri Light Gray',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RJ_Municipios_2020_1 = new ol.format.GeoJSON();
var features_RJ_Municipios_2020_1 = format_RJ_Municipios_2020_1.readFeatures(json_RJ_Municipios_2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RJ_Municipios_2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RJ_Municipios_2020_1.addFeatures(features_RJ_Municipios_2020_1);
var lyr_RJ_Municipios_2020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RJ_Municipios_2020_1, 
                style: style_RJ_Municipios_2020_1,
                popuplayertitle: "RJ_Municipios_2020",
                interactive: true,
                title: '<img src="styles/legend/RJ_Municipios_2020_1.png" /> RJ_Municipios_2020'
            });
var format_Projetos_2 = new ol.format.GeoJSON();
var features_Projetos_2 = format_Projetos_2.readFeatures(json_Projetos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projetos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projetos_2.addFeatures(features_Projetos_2);
var lyr_Projetos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projetos_2, 
                style: style_Projetos_2,
                popuplayertitle: "Projetos",
                interactive: true,
    title: 'Projetos<br />\
    <img src="styles/legend/Projetos_2_0.png" /> LICITAÇÃO (FASE EXTERNA)<br />\
    <img src="styles/legend/Projetos_2_1.png" /> LICITAÇÃO (FASE INTERNA)<br />'
        });
var format_Andamento_3 = new ol.format.GeoJSON();
var features_Andamento_3 = format_Andamento_3.readFeatures(json_Andamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Andamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Andamento_3.addFeatures(features_Andamento_3);
var lyr_Andamento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Andamento_3, 
                style: style_Andamento_3,
                popuplayertitle: "Andamento",
                interactive: true,
    title: 'Andamento<br />\
    <img src="styles/legend/Andamento_3_0.png" /> GEROB<br />\
    <img src="styles/legend/Andamento_3_1.png" /> GERPENG<br />\
    <img src="styles/legend/Andamento_3_2.png" /> GERPSA<br />'
        });

lyr_EsriLightGray_0.setVisible(true);lyr_RJ_Municipios_2020_1.setVisible(true);lyr_Projetos_2.setVisible(true);lyr_Andamento_3.setVisible(true);
var layersList = [lyr_EsriLightGray_0,lyr_RJ_Municipios_2020_1,lyr_Projetos_2,lyr_Andamento_3];
lyr_RJ_Municipios_2020_1.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Projetos_2.set('fieldAliases', {'GERÃNCIA': 'GERÃNCIA', 'CONTRATO N': 'CONTRATO N', 'STATUS': 'STATUS', 'SEI': 'SEI', 'SEI LICITA': 'SEI LICITA', 'FONTE DE R': 'FONTE DE R', 'OBRAS': 'OBRAS', 'Tipo': 'Tipo', 'TÃTULO DA': 'TÃTULO DA', 'EMPRESA': 'EMPRESA', 'CONTRATO A': 'CONTRATO A', 'TOTAL MEDI': 'TOTAL MEDI', '% MEDIDO': '% MEDIDO', 'PRAZO VIGÃ': 'PRAZO VIGÃ', 'VALOR ESTI': 'VALOR ESTI', 'OBS': 'OBS', 'MUNICÃPIO': 'MUNICÃPIO', 'RA': 'RA', 'RH': 'RH', 'CORPO HÃD': 'CORPO HÃD', 'Lat': 'Lat', 'Long': 'Long', 'LatLong': 'LatLong', });
lyr_Andamento_3.set('fieldAliases', {'GERÃNCIA': 'GERÃNCIA', 'CONTRATO N': 'CONTRATO N', 'STATUS': 'STATUS', 'SEI': 'SEI', 'SEI LICITA': 'SEI LICITA', 'FONTE DE R': 'FONTE DE R', 'OBRAS': 'OBRAS', 'Tipo': 'Tipo', 'TÃTULO DA': 'TÃTULO DA', 'EMPRESA': 'EMPRESA', 'CONTRATO A': 'CONTRATO A', 'TOTAL MEDI': 'TOTAL MEDI', '% MEDIDO': '% MEDIDO', 'PRAZO VIGÃ': 'PRAZO VIGÃ', 'VALOR ESTI': 'VALOR ESTI', 'OBS': 'OBS', 'MUNICÃPIO': 'MUNICÃPIO', 'RA': 'RA', 'RH': 'RH', 'CORPO HÃD': 'CORPO HÃD', 'Lat': 'Lat', 'Long': 'Long', 'LatLong': 'LatLong', });
lyr_RJ_Municipios_2020_1.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Projetos_2.set('fieldImages', {'GERÃNCIA': 'TextEdit', 'CONTRATO N': 'TextEdit', 'STATUS': 'TextEdit', 'SEI': 'TextEdit', 'SEI LICITA': 'TextEdit', 'FONTE DE R': 'TextEdit', 'OBRAS': 'TextEdit', 'Tipo': 'TextEdit', 'TÃTULO DA': 'TextEdit', 'EMPRESA': 'TextEdit', 'CONTRATO A': 'TextEdit', 'TOTAL MEDI': 'TextEdit', '% MEDIDO': 'TextEdit', 'PRAZO VIGÃ': 'TextEdit', 'VALOR ESTI': 'TextEdit', 'OBS': 'TextEdit', 'MUNICÃPIO': 'TextEdit', 'RA': 'TextEdit', 'RH': 'TextEdit', 'CORPO HÃD': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'LatLong': 'TextEdit', });
lyr_Andamento_3.set('fieldImages', {'GERÃNCIA': 'TextEdit', 'CONTRATO N': 'TextEdit', 'STATUS': 'TextEdit', 'SEI': 'TextEdit', 'SEI LICITA': 'TextEdit', 'FONTE DE R': 'TextEdit', 'OBRAS': 'TextEdit', 'Tipo': 'TextEdit', 'TÃTULO DA': 'TextEdit', 'EMPRESA': 'TextEdit', 'CONTRATO A': 'TextEdit', 'TOTAL MEDI': 'TextEdit', '% MEDIDO': 'TextEdit', 'PRAZO VIGÃ': 'TextEdit', 'VALOR ESTI': 'TextEdit', 'OBS': 'TextEdit', 'MUNICÃPIO': 'TextEdit', 'RA': 'TextEdit', 'RH': 'TextEdit', 'CORPO HÃD': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'LatLong': 'TextEdit', });
lyr_RJ_Municipios_2020_1.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Projetos_2.set('fieldLabels', {'GERÃNCIA': 'inline label - always visible', 'CONTRATO N': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'SEI': 'inline label - always visible', 'SEI LICITA': 'inline label - always visible', 'FONTE DE R': 'inline label - always visible', 'OBRAS': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'TÃTULO DA': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'CONTRATO A': 'inline label - always visible', 'TOTAL MEDI': 'inline label - always visible', '% MEDIDO': 'inline label - always visible', 'PRAZO VIGÃ': 'inline label - always visible', 'VALOR ESTI': 'inline label - always visible', 'OBS': 'inline label - always visible', 'MUNICÃPIO': 'inline label - always visible', 'RA': 'inline label - always visible', 'RH': 'inline label - always visible', 'CORPO HÃD': 'inline label - always visible', 'Lat': 'no label', 'Long': 'no label', 'LatLong': 'no label', });
lyr_Andamento_3.set('fieldLabels', {'GERÃNCIA': 'inline label - always visible', 'CONTRATO N': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'SEI': 'inline label - always visible', 'SEI LICITA': 'inline label - always visible', 'FONTE DE R': 'inline label - always visible', 'OBRAS': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'TÃTULO DA': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'CONTRATO A': 'inline label - always visible', 'TOTAL MEDI': 'inline label - always visible', '% MEDIDO': 'inline label - always visible', 'PRAZO VIGÃ': 'inline label - always visible', 'VALOR ESTI': 'inline label - always visible', 'OBS': 'inline label - always visible', 'MUNICÃPIO': 'inline label - always visible', 'RA': 'inline label - always visible', 'RH': 'inline label - always visible', 'CORPO HÃD': 'inline label - always visible', 'Lat': 'no label', 'Long': 'no label', 'LatLong': 'no label', });
lyr_Andamento_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});