// Define the colorVariations of the angular gauge
const colorRange = {
    "minvalue": "0",
    "code": "#FFE0B2",
    "gradient": "1",
    "color": [{
        "minvalue": "0.5",
        "maxvalue": "1.0",
        "color": "#FFD74D"
    }, {
        "minvalue": "1.0",
        "maxvalue": "2.0",
        "color": "#FB8C00"
    }, {
        "minvalue": "2.0",
        "maxvalue": "3.0",
        "color": "#E65100"
    }]
};

//Set up the Map's data
const data = [{
    "id": "NA",
    "value": ".82",
    "showLabel": "1"
}, {
    "id": "SA",
    "value": "2.04",
    "showLabel": "1"
}, {
    "id": "AS",
    "value": "1.78",
    "showLabel": "1"
}, {
    "id": "EU",
    "value": ".40",
    "showLabel": "1"
}, {
    "id": "AF",
    "value": "2.58",
    "showLabel": "1"
}, {
    "id": "AU",
    "value": "1.30",
    "showLabel": "1"
}];

//STEP 3 - Map Configurations
var mapConfigurations = {
    "type": "maps/world",
    "renderAt": "chart-container",
    "width": "800",
    "height": "550",
    "dataFormat": "json",
    "dataSource": {
        // Map Configuration
        "chart": {
            "caption": "Average Annual Sales",
            "subcaption": " 2017-2023",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": colorRange,
        // Source data as JSON --> id represents countries of world.
        "data": data
    }
}

FusionCharts.ready(function(){
    var fusioncharts = new FusionCharts(mapConfigurations);
fusioncharts.render();
});
