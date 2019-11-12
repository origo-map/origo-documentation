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
        "expanded": false
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

### Drag-and-drop control

Adds the ability to drag-and-drop GeoJSON, GPX, IGC, KML and TopoJSON files to the map. Note that the layers are only temporarily available, once the map is closed the layers are lost. It is possible to drag-and-drop multiple files at once.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`groupName` | the name of the group containing the added layers. Defaults to "egna-lager".
`groupTitle` | the title of the group containing the added layers. Used if group doesn't exist. Defaults to "Egna lager".

#### Example drag-and-drop control

```json
{
  "name": "draganddrop",
  "options": {
    "groupName": "drag-and-drop-layers"
    "groupTitle": "Drag-and-drop layers"
  }
}
```

### Editor control

Enables layer editing.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`editableLayers` | Layers that will we handled as editable layers. The name of the layer is used as identifier to get the settings for the layer as defined in layers. Can also be configured on a per layer basis. This will be deprecated in future releases of Origo. Editable can be set as a layer property.
`defaultLayer` | Editable layer that should be chosen as default editable layer.
`autoForm` | If set to true, the attribute form will be displayed automatically after a feature has been drawn. Default is false.
`isActive` | option to set if the editor toolbar should be opened and activated by default. Default is false.
`autoSave` | if edits should be autosaved or not. Defaults to true.
`snap` | option to enable/disable snapping. Default is true.
`snapLayers` | List of layers that should have snapping enabled. Default is editableLayers.
`drawTools` | Extra draw tools besides the standard tools for Point, Line and Polygon. The tool is set for each geomtry type. Currently 'box' for 'Polygon' is the only draw tool that can be added.

#### Example editor control

```json
{
  "name": "editor",
  "options": {
    "isActive": true,
    "autoSave": false,
    "defaultLayer": "editor_polygon",
    "drawTools": {
      "Polygon": ["box"]
    }
  }
}
```

### External url control

Adds a button that will send the center coordinates in an url template and opens the url in a new browser tab. When configuring more than one link, the button expands and displays a button for each url.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`tooltipText` | the tooltip text for the button
`links` | Options for the links. Configured as a list. Available options are listed below.

Links option | Description
---|---
`name` | the name of the link. Optional.
`tooltipText` | the tooltip text for the button. Optional.
`method` | the method/format that the coordinates will be send in. Valid values are “LatLon” or “XY”. Required.
`projection` | the projection of the external web map services. The projection must be defined in proj4Defs, except EPSG:4326, EPSG:4269, EPSG:3857, EPSG:3785, EPSG:900913, EPSG:102113 or GOOGLE, which are included by default. Default is EPSG:3857.
`url` | url to the external endpoint. Coordinates can be defined within curly brackets. If method is set as “LatLon” then {{LAT}} and {{LON}} must be available in the url. If method is set as “XY” then {{X}} and {{Y}} must be available. Required.
`buttonImage` | path to the button image. If not specified, a default image is displayed. Optional.

#### Example external url control

```json
{
  "name": "externalurl",
  "options": {
       "tooltipText": "Kartlänkar",
       "links": [
           {
            "tooltipText": "OpenStreetMap",
            "method": "LatLon",
            "projection": "EPSG:3857",
            "url": "https://www.openstreetmap.org/#map=17/{{LAT}}/{{LON}}",
            "buttonImage": "img/png/osm.png"
           },
           {
            "tooltipText": "Google street view",
            "method": "LatLon",
            "url": "https://www.google.com/maps/@?api=1&map_action=pano&viewpoint={{LAT}},{{LON}}&heading=-45&pitch=10&fov=80",
            "buttonImage": "img/png/google_street_view.png" 
          }
         ]
    }
}
```

### Geoposition control

Adds a button that when clicked centers and zooms the map to the current position.

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

### Home control

Sets the map extent to the one specified in the options for the control.

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
`cls` | option to add css class references to the legend element.
`style` | option to add inline HTML style properties to the legend element.
`expanded` | true or false if the legend should be expanded or collapsed on load. Default is true.
`contentCls` | option to add css class references to the legend content element.
`contentStyle` | option to add inline HTML style properties to the legend content element.
`name` | option to set the legend UI component name. Default is 'legend'.

#### Example legend control

```json
{
  "name": "legend",
  "options": {
    "expanded": false,
    "style": {
      "width": "300px"
    },
    "contentStyle": {
      "width": "300px"
    }
  }
}
```

### Link control

Adds a button to the map menu that when clicked opens a new browser tab with the specified url.

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

### Mapmenu control

Creates a menu on the top right for controls.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`isActive` | option to set if the mapmenu should be open on load. Default is false.
`breakPointSize` | sets the breakpoint below which the mapmenu will be closed on load by default. Accepted values are 'xs', 's', 'm', and 'l', corresponding to the breakpoints set in conf/origoConfig.js. Default is 'l' (768px).

#### Example mapmenu control

```json
{
  "name": "mapmenu",
  "options": {
    "isActive": true
  }
}
```

### Measure control

Adds a measure control. Measure length or area in the map.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`measureTools` | Array of tools to use. Valid are 'length' and 'area'. Default is ["length", "area"].
`default` | What tool to use as default. Default is 'length'

#### Example measure control

```json
{
  "name": "measure",
  "options": {
    "measureTools": ["length", "area"],
    "default": "length"
  }
}
```

### Position

Control to show coordinates. Mouse position and center position of the map can be toggled. Coordinates can be searched on in the center position mode.

Property | Description
---|---
`name` | the name of the control

Option | Description
---|---
`title` | alias name of the current map projection to be displayed.
`projections` | object of projections to toggle between. Projection code and alias name is required for each projection. The projection must be defined in proj4Defs, except EPSG:4326 and EPS:3857 which are included by default.


#### Example position control

```json
{
  "name": "position",
  "options": {
    "title": "Sweref99 16.30",
    "projections": {
      "EPSG:4326": "WGS84",
      "EPSG:3006": "Sweref99 TM"
    }
  }
}
```
```json
{
"proj4Defs": [
    {
        "code": "EPSG:3010",
        "alias": "urn:ogc:def:crs:EPSG::3010",
        "projection": "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    },
    {
      "code": "EPSG:3006",
      "projection": "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
    }
]
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
`hintText` | placeholder text for the search input. Default is Sök.
`limit` | the max number of suggestions to be displayed. Default is 9.
`minLength` | minimum number of characters to trigger search. Default is 4.
`geometryAttribute` | geometry attribute if northing and easting is not used.
`maxZoomLevel` | maximum zoom level after selection. Default is 2.
`idAttribute` | attribute in the response storing the feature id.
`layerNameAttribute` | attribute in the response storing the layer name. The layer must be defined in the map.
`layerName` | layer defined in map if not included in the search response.
`titleAttribute` | attribute in response storing the featureinfo title.
`contentAttribute` | attribute in response storing the featureinfo content.
`includeSearchableLayers` | whether to include searchable layers in query string or not. Defaults to false.
`searchableDefault` | default value for searchable. 'always', true (searchable when visible) or false. Defaults to false.

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

### Sharemap control

Creates a shareable link to the map. Current extent and zoom, visible layers and the map pin (if applicable) will be shared. The sharemap control also comes with the option to save map state on the server (requires Origo Server). A saved map state is retrieved with an ID instead of an URL.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`storeMethod` | Should be set to `saveStateToServer` in order to utilize the save-to-server feature.
`serviceEndpoint` | URL to the Origo Server service endpoint, for example `https://www.mydomain.com/mapstate`.

#### Example sharemap control

```json
{
  "name": "sharemap"
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
`hideButton` | adds button to stop the current splash from displaying on subsequent visits to the map. If the content is updated, the splash will be displayed again. Options available are 'visible' (the only option required), 'hideText' and 'confirmText'.
`style` | adds the css style to the splash window.

#### Example splash control

```json
{
  "name": "splash",
  "options": {
    "url": "examples/splash-content.html",
    "hideButton": {
      "visible": true
    },
    "style": "width: 600px;"
  }
}
```

### Scale control

Adds a scale control that will show an approximation of the current scale in text.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`scaleText` | text to show before the scale value.

#### Example scale control

```json
{
  "name": "scale",
  "options": {
    "scaleText": "1:"
  }
}
```

### Progressbar

Adds a control to show the load progress of all the layers in the map. The progressbar is located at the bottom of the application above the footer.

Property | Description
---|---
`name` | the name of the control


#### Example progressbar control

```json
{
  "name": "progressbar"
}
```
