## Controls

A control is an optional module with a DOM element in a fixed position on the
screen. They can involve user input (buttons), or be informational only. The controls to be included in the maps are set in the map configuration. The order of the controls matter. For instance, adding legend before mapmenu will make it render below when overlapping. Similarily the order of the controls in the mapmenu is set by the order in the config.

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
    "name": "print",
    "options": {
      "showCreated": true,
      "createdPrefix": "Skapad ",
      "logo": {
        "cls": "padding-bottom-small",
        "src": "css/png/logo_print.png",
        "style": {
            "height": "3rem"
          }
        },
        "northArrow": {
          "cls": "padding-right-small printmap-north-arrow",
          "src": "css/png/north_arrow_print.png",
          "visible": false,
          "style": {
            "height": "5rem"
          }
        }
    }
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
`hideWhenEmbedded` | if set to true, the control is not displayed when the map is embedded. Defaults to false

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

### Bookmarks control

Adds a bookmarks control. Clicking the button opens a panel with a list of bookmarks. Clicking a bookmark will pan and zoom to the coordinates and zoomLevel specified in the config file. The bookmarks panel is movable.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`title` | the title shown in the bookmarks panel, also sets the tooltip text. Defaults to `Bokmärken`.
`isActive` | sets whether the control should be active (open) on map load. Defaults to `false`.
`maxZoom` | sets the general zoom level. This zoom level is used if no zoom level is set on the bookmark. Defaults to `15` (or highest available zoom level).
`duration` | sets the duration of the pan and zoom animation in milliseconds. Defaults to `300`.
`items` | list of bookmarks. Configured as an array of objects.
`hideWhenEmbedded` | if set to true, the control is not displayed when the map is embedded. Defaults to `false`.

Items options | Description
---|---
`title` | title of the bookmark.
`coordinates` | array of point coordinates.
`zoomLevel` | target zoom level for the specific bookmark. Optional.

#### Example Bookmarks control

```json
{
  "name": "bookmarks",
  "options": {
    "title": "Bookmarks",
    "isActive": true,
    "duration": 1000,
    "items": [
      {
        "name": "Hudiksvall",
        "coordinates": [1904063, 8794995]
      },
      {
        "name": "Karlstad",
        "coordinates": [1503136, 8262205]
      },
      {
        "name": "Sigtuna",
        "coordinates": [1986473, 8315061],
        "zoomLevel": 10
      }
    ]
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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example drag-and-drop control

```json
{
  "name": "draganddrop",
  "options": {
    "groupName": "drag-and-drop-layers",
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
`drawTools` | Array of extra draw tools besides the standard tools for Point, Line and Polygon. The tool is set for each geometry type.
`attributes` | definition of [attributes](#attributes) and how they should be presented and validated in editor form. If not provided all available attributes will be shown with a standard template.
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.
`validateOnDraw` | If set to true, the editor prevents drawing invalid geometries (self-intersect). Defaults to false.

Draw tools can be set for each geometry type on editor control level in wich case it adds the configured tool to each layer of that
kind in addition to the default tool. Draw tools can also be set on each layer in which case the default tool is not added unless specified.

drawTool | Description
---|---
`Polygon` | Draws a polygon (default for polygon layers)
`Line` | Draws a line (default for line layers)
`Point` | Draws a point (default for point layers)
`box` | Draws a rectangle
_object_ | Specifies a draw tool that needs more configuration

__CopyTool__

Copies a geometry from one vector layer to the currently edited layer.

Property | Description
---|---
`toolName` | Name of the tool. Copy tool has name 'Copy' __Required__
`groups`| Array of group names from which geometries can be copied. Mainly useful for layers which names are not known beforehand.
`layers` | Array of layer names that are possible to copy from

If neither _groups_ nor _layers_ are specified all vector layers can be copied from.


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

#### Example polygon and copy tool in layer configuration

```json
{
"drawTools": [
        "Polygon",
        {
          "toolName": "Copy",
          "layers": [ "SketchPoly" ],
          "groups": [ "drag-and-drop-layers" ]
        }
      ]
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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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

### Fullscreen control

Adds a button that will open an embedded map in fullscreen mode in a new tab/window. This is a default control.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`target` | String. Id of the target container element. Default is the main navigation toolbox (top left).
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example fullscreen control

```json
{
  "name": "fullscreen",
  "options": {
      "hideWhenEmbedded": true
  }
}
```

### Geoposition control

Adds a button that when clicked centers and zooms the map to the current position. Clicking the button a second time will activate the tracking mode (if `enableTracking` has been set to `true`).

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`active` | Boolean. Whether the control should be activated on map load or not. Defaults to false.
`panTo` | Boolean. Whether to pan to users position or not. Defaults to true.
`zoomLevel` | Integer. Specifies the zoom level that will be used when a position has been aquired. If it is not specified, the map will be zoomed to the fourth closest resolution. This option has no effect if panTo is set to false.
`enableTracking` | Boolean. Option to enable tracking mode. When enabled and activated, the map will continuously center on the user's position. Defaults to false.
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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
`labelOpacitySlider` | option to use custom label for the opacity slider. Default is 'Opacity'.
`name` | option to set the legend UI component name. Default is 'legend'.
`turnOffLayersControl` | true or false for whether the turn off layers button should be present in the legend or not. Default is false.
`autoHide` | option to set if the legend should close automatically on map click. Accepted values are 'always' (legend is always closed on map click), 'mobile' (legend is closed on map click if map size is 'm' or smaller (see breakpoints in origo.js)) and 'never' (legend is never closed on map click, this is the default setting).
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example legend control

```json
{
  "name": "legend",
  "options": {
    "expanded": false,
    "turnOffLayersControl": true,
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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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
`breakPointSize` | sets the breakpoint below which the mapmenu will be closed on load by default. Accepted values are 'xs', 's', 'm', and 'l', corresponding to the breakpoints set in origo.js. Default is 'l' (768px).
`autoHide` | option to set if the mapmenu should close automatically on map click. Accepted values are 'always' (mapmenu is always closed on map click), 'mobile' (mapmenu is closed on map click if map size is 'm' or smaller (see breakpoints in origo.js)) and 'never' (mapmenu is never closed on map click, this is the default setting).
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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

Adds a measure control. Measure length, area or elevation (requires access to external elevation data web service) in the map.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

Option | Description
---|---
`measureTools` | Array of tools to use. Valid are 'length', 'area' and 'elevation'. Default is ["length", "area"].
`default` | What tool to use as default. Default is 'length'.
`elevationServiceURL` | URL to elevation data web service, with variable parameters enclosed in curly braces. Applicable variables are `{easting}` and `{northing}`. Required if using elevation tool.
`elevationTargetProjection` | Projection code for coordinates to be sent to an elevation web service, if other than the current map projection.
`elevationAttribute` | "Path" to the elevation data attribute in the web service response. Required if using elevation tool.
`showSegmentLengths` | True or false if individual segment lengths should be shown. Default is false.
`showSegmentLabelButtonActive` | True or false if the label for segment lengths should be active or not from start. Default is true.
`useHectare` | True or false if hectare should be used for area between 10 000 and 1 000 000 square meters. Default is true and hectare is used, false and square meters is used.

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

#### Example measure control with elevation data tool

```json
{
  "name": "measure",
  "options": {
    "measureTools": ["length", "area", "elevation"],
    "default": "length",
    "elevationServiceURL": "https://maps.googleapis.com/maps/api/elevation/json?locations={northing},{easting}&key=MY_API_KEY",
    "elevationProjection": "EPSG:4326",
    "elevationAttribute": "results[0].elevation"
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
`noPositionText` | when empty last mouse position is rendered else text of choise renders. If this option is not defined, no coordinates when no mouse position.  
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.


#### Example position control

```json
{
  "name": "position",
  "options": {
    "title": "Sweref99 16.30",
    "projections": {
      "EPSG:4326": "WGS84",
      "EPSG:3006": "Sweref99 TM"
    },
    "noPositionText": ""
  }
}
```

### Print

Adds a print control.

Property | Description
---|---
`name` | the name of the control

Option | Description
---|---
`leftFooterText` | a small left-aligned text on the bottom left. Optional.
`showCreated` | shows the current date as a small right-aligned text on the bottom right. Optional. Default is false.
`createdPrefix` | text displayed before the current date on the bottom right. Requires `showCreated: true`. Optional.
`logo` | a object for configure placing the logo on the printed map. Optional.
`cls` | a css class for styling e.g. the placing of the image. Optional, defaults to "padding-bottom-small".
`src` | the path to logo image relative to the maps base url. Optional, defaults to "css/png/logo_print.png".
`style` | a style object for setting e.g. the height of the image. Optional, defaults to "{"height": "3rem"}".
`northArrow` | a object for configure the north arrow on the printed map. Optional.
`cls` | a css class for styling e.g. the placing of the image. Optional, defaults to "padding-right-small printmap-north-arrow".
`src` | the path to logo image relative to the maps base url. Optional, defaults to "css/png/north_arrow_print.png".
`visible` | option to set if the north arrow should be visible on load. Default is true.
`style` | a style object for setting e.g. the height of the image. Optional, defaults to "{"height": "5rem"}".
`showScale` | option to set if the scale should be visible on load. Optional, default is true.
`scales` | Array of scales to use. Optional, if not specified the scales are calculated from the map resolutions.
`supressResolutionsRecalculation` | option to set if the resolutions array should be recalculated when entering the print preview (and restored when exited). Alleviates problem with large scales and 300DPI, default is true.
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.


#### Example Print control

```json
{
  "name": "print",
  "options": {
      "leftFooterText": "OBS: Kartan är inte rättsligt gällande.",
      "showCreated": true,
      "createdPrefix": "Skapad ",
      "logo": {
        "cls": "padding-bottom-small",
        "src": "css/png/logo_print.png",
        "style": {
            "height": "3rem"
          }
        },
        "northArrow": {
          "cls": "padding-right-small printmap-north-arrow",
          "src": "css/png/north_arrow_print.png",
          "visible": true,
          "style": {
            "height": "5rem"
          }
        },
        "showScale": true,
        "scales": [
          "1:100000",
          "1:50000",
          "1:15000",
          "1:10000",
          "1:5000",
          "1:1000",
          "1:500"
        ]
  }
}
```

### Progressbar control

Adds a control to show the load progress of all the layers in the map. The progressbar is located at the bottom of the application above the footer.

Property | Description
---|---
`name` | the name of the control

Option | Description
---|---
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.


#### Example progressbar control

```json
{
  "name": "progressbar"
}
```

### Search control

Adds a search control. The search control requires a search end point to function.

The search control uses autocomplete. Autocomplete suggestions may optionally be grouped with headings, e g with one group of suggestions per layer.

There are several ways to configure how selected search result should be handled.
All options require that `url` and `searchAttribute` are provided.
* Option 1. Feature info is requested from a map service, which is used to get the geometry and attributes. The layer is defined
as an ordinary layer in the layer config section.  
   Additional search options required: `geometryAttribute`, `idAttribute` and `layerNameAttribute`
* Option 2. Same as option 1 but for single layer search. `layerName` is defined
as an option and is not included in the search response.  
   Additional search options required: `geometryAttribute` and `layerName`
* Option 3. Complete feature info is included in the search result.  
   Additional search options required: `geometryAttribute`, `titleAttribute` and `contentAttribute`
* Option 4. This is a single table search. No layer is defined.  
   Additional search options required: `geometryAttribute` and `title`
* Option 5. Feature info is shown without selection in the map. This is a simple single table search.  
   Additional search options required: `title`, `northing` and `easting`

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`url` | url to the search endpoint. Always required.
`searchAttribute` | the attribute that will be queried. Always required.
`northing` | the attribute for northing coordinates. Only if geometryAttribute is not provided.
`easting` | the attribute for easting coordinates. Only if geometryAttribute is not provided.
`title` | title for the popup presenting the search result
`hintText` | placeholder text for the search input. Default is Sök.
`limit` | the max number of suggestions to be displayed. Default is 9.
`minLength` | minimum number of characters to trigger search. Default is 4.
`groupSuggestions` | whether to group autocomplete suggestions or not. Depending on the configuration option used (see above), titles are set using the `title` properties of defined map layers (options 1 and 2), values from the attribute in the result defined by `titleAttribute` (3) or the `title` search control configuration option (4 and 5). Defaults to false.
`geometryAttribute` | geometry attribute is required if northing and easting are not used.
`maxZoomLevel` | maximum zoom level after selection. Default is 2.
`idAttribute` | attribute in the response storing the feature id.
`layerNameAttribute` | attribute in the response storing the layer name. The layer must be defined in the map.
`layerName` | layer defined in map if not included in the search response.
`titleAttribute` | attribute in response storing the featureinfo title.
`contentAttribute` | attribute in response storing the featureinfo content.
`includeSearchableLayers` | whether to include searchable layers in query string or not. Defaults to false.
`searchableDefault` | default value for searchable. 'always', true (searchable when visible) or false. Defaults to false.
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example search response

```json
{
  "NAMN":"Drottninggatan 13",
  "N":6610524.99261475,
  "E":151466.20581054702
}
```

#### Example search control (option 1)

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "layerNameAttribute": "TYPE",
      "idAttribute": "GID",
      "geometryAttribute": "GEOM",
      "hintText": "Sök adress eller platser..."
  }
}
```

#### Example search control (option 2)

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "layerName": "TYPE",
      "geometryAttribute": "GEOM",
      "hintText": "Sök adress eller platser..."
  }
}
```

#### Example search control (option 3)

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "titleAttribute": "TYPE",
      "contentAttribute": "NAMN",
      "geometryAttribute": "GEOM",
      "hintText": "Sök adress eller platser..."
  }
}
```

#### Example search control (option 4)

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "geometryAttribute": "GEOM",
      "title": "Adress",
      "hintText": "Sök adress eller platser..."
  }
}
```

#### Example search control (option 5)

```json
{
  "name": "search",
  "options": {
      "url": "http://localhost:3000/adressok",
      "searchAttribute": "NAMN",
      "northing": "N",
      "easting": "E",
      "title": "Adress",
      "hintText": "Sök adress eller platser..."
  }
}
```

### Sharemap control

Creates a shareable link to the map. Current extent and zoom, visible layers and the map pin (if applicable) will be shared. If a feature in the map is selected, the id of the feature will be in the link making the map zoom to it on load. This goes for WFS, Geojson, Topojson and AGS Feature layers. The sharemap control also comes with the option to save map state on the server (requires Origo Server). A saved map state is retrieved with an ID instead of an URL.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`storeMethod` | Should be set to `saveStateToServer` in order to utilize the save-to-server feature.
`serviceEndpoint` | URL to the Origo Server service endpoint, for example `https://www.mydomain.com/mapstate`.
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

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
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example scale control

```json
{
  "name": "scale",
  "options": {
    "scaleText": "1:"
  }
}
```

### Scalepicker control

Adds a scalepicker control that allows the user to change the map scale using a dropdown list of predefined scales. The available scales are determined by the resolutions specified in index.json.

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`buttonPrefix` | text to show before the scale value on the control button
`listItemPrefix` | text to show before the scale value in the dropdown list
`hideWhenEmbedded` | if set to true, the control is not added when the map is embedded. Defaults to false.

#### Example scalepicker control

```json
{
  "name": "scalepicker",
  "options": {
    "buttonPrefix": "Scale: ",
    "listItemPrefix": "Scale: "
  }
}
```
