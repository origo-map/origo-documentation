## Using Origo API

Origo API is a mix of using exposed methods in Origo and objects from OpenLayers.

For more information on all the options with OpenLayers see [OpenLayers API documentation](https://openlayers.org/en/latest/apidoc/)

The examples below should most of them be runnable on Origo demo map that is distributed from the Github repository, but some uses controls or layers that isn't specified in configuration.

#### Example code

```json
// The base for calling the Origo API
origo.api()

// Accessing the OpenLayers API
Origo.ol
```

### Change visibility of layer

To change the visibility of a layer first get the layer and then apply setVisible method with true/false as parameter.

#### Example code for making a layer visible

```json
origo.api().getLayer('origo-cities').setVisible(true);
origo.api().getLayer('origo-cities').setVisible(false);
```

### Change Zoom

Set the zoom level by enter an integer. The number of zoom level is depending on the configuration and setting a higher number than max zoom will only result in max zoom.

#### Example code for changing zoom

```json
origo.api().getMap().getView().setZoom(8);
```

### Move the map

To move the map give the coordinates of the center in the map. If the coordinates is in another projection a function to convert the coordinates to the maps projection can be called.

#### Example code for moving the map

```json
// Set center with the native projection (in this example EPSG:3857) of the map
origo.api().getMap().getView().setCenter([1985429,8315145]);

// Set center with transformation of the coordinates from WGS84 to Sweref 99 TM
origo.api().getMap().getView().setCenter(origo.api().getMapUtils().transformCoordinate([13.5,59.38],'EPSG:4326','EPSG:3006'));
```

### Change visibilty of controls

To hide or show a control search the control by name and then apply the hide and unhide method on the control.

#### Example code for hide or show a control

```json
// Hide the legend control
origo.api().getControlByName('legend').hide();

// Show the legend control
origo.api().getControlByName('legend').unhide();
```

### Get features

To get all features from a layer and get all ids for the features.

#### Example code for getting features and write out their ids

```json
const allFeatures = origo.api().getLayer('origo-cities').getSource().getFeatures();

allFeatures.forEach(feature => {
  console.log(feature.getId());
});
```

### Place a marker on map

A marker can be placed with coordinates to location and also set a title and text for a popup.

#### Example code for adding a marker with popup on map

```json
// Give coordinates, title for popup and text for popup (HTML allowed)
origo.api().addMarker([1926764,8953470],'Get here!','<b>Sundsvalls kommun</b><br/>Norrmalmsgatan 4<br/>851 85 Sundsvall');
```

### Limit features for layer

A filter can be applied to a layer to only show a selection of the features in the layer.

#### Example code for setting a filter on a layer

```json
// Get the layer and then set a filter for it
origo.api().getLayer('Invasive_species').getSource().setFilter("[OrganismGroup] == 'Mamals'");
```

### Get a link for the map

To get a link of the map with applied layers and settings

#### Example code for creating a sharemap link to the map

```json
// Get the sharemap control and produce a URL and display it in a alert dialog.
origo.api().getControlByName('sharemap').getPermalink().then((data) => alert(data));
```

### Get drawn features

To access the features drawn in the drawplugin lookup the layer called drawplugin and get the features from that layers source.

#### Example code for getting drawn features

```json
// Get all layers
const allLayers = origo.api().getMap().getAllLayers();

// Find the layer for draw control and get the source of that layer to get the features.
allLayers.forEach(layer => {
  if (layer.values_.title === 'Ritlager')
  {
    const drawSource = layer.getSource();
    const drawnFeatures = drawSource.getFeatures();
    console.log(drawnFeatures);
  }
});
```

### Add new tile layer

To add a new tile layer a source must be given and also a title and name.

#### Example code for adding new layer to map

```json
// Add a StadiaMaps tile layer (requires OpenLayers to be version 8 or higher)
origo.api().getMap().addLayer(new Origo.ol.layer.Tile({source: new Origo.ol.source.StadiaMaps({layer: 'stamen_watercolor' }), title: 'Stamen', name: 'stamen'}));
```

### Add new vector layer

To add a new vector layer from GeoJSON object.

#### Example code for adding new vector layer to map

```json
// Define a GeoJSON object with a point at Stora Torget in Karlstad as coordinates
var geojsonObject = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
       'name': 'EPSG:3857',
    },
  },
  'features': [
    {
    'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [1503198, 8263188],
      },
      'properties': {
        'typ': 'En ny punkt!'
      }
    }
  ]
};

// Create a vector source from the GeoJSON object
var vectorSource = new  Origo.ol.source.Vector({features: new Origo.ol.format.GeoJSON().readFeatures(geojsonObject),});
 
// Create a vector layer
var vectorLayer = new  Origo.ol.layer.Vector({source: vectorSource,
  name: 'Vektorlager',
  title: 'Vektorlager',
  queryable: true
});
 
// Add the layer to the map
origo.api().getMap().addLayer(vectorLayer);

// Center the map to where geometry was added to the map
origo.api().getMap().getView().setCenter([1503198,8263188]);

// Create a circle geometry with the radius 300 m
vectorSource.addFeature(new Origo.ol.Feature(new Origo.ol.geom.Circle([1503198, 8263188], 300)));

// Clear all features from the vector layer
origo.api().getLayer('Vektorlager').getSource().clear();

// Add the feature from
origo.api().getLayer('Vektorlager').getSource().addFeatures(new Origo.ol.format.GeoJSON().readFeatures(geojsonObject));
```

### Add export to click event

To do a export on a click event.

#### Example code for adding a click event export method.

```json
// Adds on a click event a method that checks wheter a point feature is clicked on and then makes a GPX export.
origo.api().getMap().on("click", function(e) {
  this.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    if(feature.getGeometry().getType() == 'Point'){
    	alert(new Origo.ol.format.GPX().writeFeatures([feature], {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'}));
    }
  })
});
```

### Add fetch from API to event

To do a fetch on a moveend event.

#### Example code for adding a moveend event fetch method.

```json
// Adds on a moveend event a method that fetches height information on center coordinates.
origo.api().getMap().on("moveend", function(e) {
  var center = origo.api().getMap().getView().getCenter();
  fetch('https://karta.sundsvall.se/origoserver/lm/elevation/3857/' + center[0] + '/' + center[1])
  .then(response => response.json())
  .then(data => {
    alert('+'+ data.geometry.coordinates[2] +  ' meter');
  });
});
```
