## Controls

A control is an optional module with a DOM element in a fixed position on the
screen. They can involve user input (buttons), or be informational only. The controls to be included in the maps are set in the map configuration.

#### Example setting controls to be included

```json
{
"controls": [
  {
    "name": "geoposition",
    "options": {
        "zoomLevel": 15
    }
  },
  {
    "name": "mapmenu"
  },
  {
    "name": "sharemap"
  },
  {
    "name": "print"
  },
  {
    "name": "legend",
    "options": {
        "hasMapLegend": false
    }
  },
  {
    "name": "search",
    "options": {
        "url": "http://localhost:3000/adressok",
        "searchAttribute": "NAMN",
        "northing": "N",
        "easting": "E",
        "title": "Adress"
    }
  }
],
}
```

### Search control

Adds a search control. The search control requires a search end point to function.

The search control uses autocomplete. There are several ways to configure how selected search result should be handled.
* Option 1. Feature info is requested from a map service.
In this case idAttribute and layerNameAttribute must be provided.
A map service is used to get the geometry and attributes. The layer is defined
as an ordinary layer in the layer config section.
* Option 2. Same as option 1 but for single layer search. layerName is defined
as an option and is not included in the search response.
In this case geometryAttribute and layerName must be provided.
* Option 3. Complete feature info is included in the search result.
In this case titleAttribute, contentAttribute and geometryAttribute must be provided.
* Option 4. This is a single table search. No layer is defined.
In this case geometryAttribute and title must be defined.
* Option 5. Feature info is shown without selection in the map.
This is a simple single table search. In this case title, northing and easting
must be defined.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`url` | url to the search endpoint
`searchAttribute` | the attribute that will be queried.
`northing` | the attribute for northing coordinates. Only if geometryAttribute is not provided.
`easting` | the attribute for easting coordinates. Only if geometryAttribute is not provided.
`title` | title for the popup presenting the search result
`hint` | if hint text should be shown in search input. Default is true.
`hintText` | placeholder text for the search input. Default is Sök.
`highlight` | if matching search string should be highlighted. Default is true.
`geometryAttribute` | geometry attribute if northing and easting is not used.
`maxZoomLevel` | maximum zoom level after selection. Default is 2.
`idAttribute` | attribute in the response storing the feature id.
`layerNameAttribute` | attribute in the response storing the layer name. The layer must be defined in the map.
`layerName` | layer defined in map if not included in the search response.
`titleAttribute` | attribute in response storing the featureinfo title.
`contentAttribute` | attribute in response storing the featureinfo content.

#### Example search control

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "northing": "N",
      "easting": "E",
      "title": "Adress",
      "Sök adress eller platser..."
  }
}
```

#### Example search response

```json
{
  "NAMN":"Drottninggatan 13",
  "N":6610524.99261475,
  "E":151466.20581054702
}
```

### Home control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`extent` | The extent to zoom to. If no extent is provided the initial extent of the map will be used.

#### Example home control

```json
{
  "name": "home",
  "options": {
    "extent": [134966, 6593080, 176372, 6636922]
  }
}
```

### Legend control

Adds a legend control. Legend is added to menu and as a map legend to the map.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`hasMapLegend` | true or false to add the map legend. Default is true.

#### Example legend control

```json
{
  "name": "legend",
  "options": {
      "hasMapLegend": false
  }
}
```

### Geoposition control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`zoomLevel` | Specifies the zoom level that will be used when a position has been aquired. If it is not specified, the map will be zoomed to the fourth closest resolution.

#### Example geoposition control

```json
{
  "name": "geoposition",
  "options": {
      "zoomLevel": 15
  }
}
```

### Mapmenu control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`-` | -

#### Example mapmenu control

```json
{
  "name": "mapmenu"
}
```

### About control

Adds an about map control. A button is added to the menu. On button click, a splash popup will show general info about the map. **NOTE** - requires mapmenu control.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`buttontext` | the button text shown in the menu
`title` | popup header text
`content` | popup content text

#### Example about control

```json
{
  "name": "about",
  "options": {
    "buttontext": "Om Origo",
    "title": "Om Origo",
    "content": "<p>Origo är ett ramverk för webbkartor. Ramverket bygger på JavaScript-biblioteket OpenLayers 3...</p>"
  }
}
```

### Sharemap control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`-` | -

#### Example sharemap control

```json
{
  "name": "sharemap"
}
```

### Editor control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`editableLayers` | Layers that will we handled as editable layers. The name of the layer is used as identifier to get the settings for the layer as defined in layers. Can also be configured on a per layer basis.
`autoForm` | If set to true, the attribute form will be displayed automatically after a feature has been drawn. Default is false.
`isActive` | option to set if the editor toolbar should be opened and activated by default. Default is false.
`snap` | option to enable/disable snapping. Default is true.
`snapLayers` | List of layers that should have snapping enabled. Default is editableLayers.

#### Example editor control

```json
{
  "name": "editor",
  "options": {
      "editableLayers": ["roads", "buildings"]
  }
}
```

### Measure control

Adds a measure control. Measure length or area in the map.

Property | Description
---|---
`name` | the name of the control

#### Example measure control

```json
{
  "name": "measure"
}
```

### Link control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`title` | Sets the link title of the control.
`url` | Sets the address for the link.

#### Example link control

```json
{
  "name": "link",
  "options": {
      "title": "Origo",
      "url": "https://github.com/origo-map/origo"
  }
}
```

### Splash control

Adds a splash control. It will show a modal window when the map is loaded. The content can defined in the content option or as a html file.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`title` | modal title text
`url` | url to a html file
`content` | content text of the modal

#### Example about control

```json
{
  "name": "splash",
  "options": {
    "url": "examples/splash-content.html"
  }
},
```
