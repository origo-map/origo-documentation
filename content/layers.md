## Layers

A layer included in the map can be either vector or raster. It can be a file such as geojson or a service such as WFS.

### GEOJSON

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer that is shown when the layer name is clicked in the legend. Optional.
`type` | type of source for the layer. For GeoJSON source the type is GEOJSON.
`source` | url to the layer.
`projection` | set projection (e g to "EPSG:4326") to request features in another reference system and Origo will handle the transformation. The proj4Defs has to be configured in index.json unless it's EPSG:4326 or 3857.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`clusterOptions` | options for clustering. See the settings page for details.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`featureinfoTitle` | attribute to be used instead of the title property as the title for the popup/sidebar. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`exportable`| Adds a _Export layer_ option to the layer info menu if set to true. Optional.
`exportFormat`| String or array of formats for file export if exportable is true. Can be set to geojson, gpx or kml. Defaults to geojson.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`headers` | Used for setting headers that should be included in the request of the GeoJSON. Formatted as a object with key/value pairs for the headers. Can be used for setting which type to accept or add a apikey.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for editing and displaying attachments

#### Basic example GeoJSON

```json
{
  "name": "mygeojson",
  "title": "My geojson",
  "source": "data/mygeojson.geojson",
  "style": "mask",
  "type": "GEOJSON"
}
```

### GPX

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer that is shown when the layer name is clicked in the legend. Optional.
`type` | type of source for the layer. For GPX source the type is GPX.
`source` | url to the layer.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is true.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`clusterOptions` | options for clustering. See the settings page for details.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`featureinfoTitle` | attribute to be used instead of the title property as the title for the popup/sidebar. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`exportable`| Adds a _Export layer_ option to the layer info menu if set to true. Optional.
`exportFormat`| String or array of formats for file export if exportable is true. Can be set to geojson, gpx or kml. Defaults to geojson.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`headers` | Used for setting headers that should be included in the request of the GPX. Formatted as a object with key/value pairs for the headers. Can be used for setting which type to accept or add a apikey.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for editing and displaying attachments

#### Basic example GPX

```json
{
  "name": "mygpx",
  "title": "My gpx",
  "source": "data/mygpx.gpx",
  "style": "line",
  "type": "GPX"
}
```

### TopoJSON

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For TopoJSON source the type is TopoJSON.
`source` | url to the layer.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`clusterOptions` | options for clustering. See the settings page for details.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`featureinfoTitle` | attribute to be used instead of the title property as the title for the popup/sidebar. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for editing and displaying attachments

#### Basic example TopoJSON

```json
{
  "name": "mytopojson",
  "title": "My topojson",
  "source": "data/mytopojson.json",
  "style": "mask",
  "type": "TOPOJSON"
}
```

### WFS

Property | Description
---|---
`name` | the unique name of the layer used internally and the name of the layer in the wfs service. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`id` | the id or ids used to identify the layers in the map server. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For WFS source the type is WFS.
`source` | named source of the layer. The [source](#source) must be defined.
`projection` | set projection (e g to "EPSG:4326") to request features in another reference system and Origo will handle the transformation. The proj4Defs has to be configured in index.json unless it's EPSG:4326 or 3857.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`editable` | if the layer should be editable or not. Requires the editor control. Defaults to false. Optional.
`allowedEditOperations` | List of available edit tools. Possible values are: _updateAttributes_, _updateGeometry_, _create_, _delete_. Only applies if layer is editable. Defaults to all. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`clusterOptions` | options for clustering. See the settings page for details.
`geometryName` | geometry attribute name. Default is geom.
`geometryType` | geometry type for the layer.
`filter` | filter provided as [cql](http://docs.geoserver.org/latest/en/user/tutorials/cql/cql_tutorial.html). Optional.
`strategy` | the ol.loadingstrategy for the layer. Can also be set on source. The options are tile, bbox or all. Default is bbox.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`featureinfoTitle` | attribute to be used instead of the title property as the title for the popup/sidebar. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`exportable`| Adds a _Export layer_ option to the layer info menu if set to true. To ensure all features in a layer is exported, `strategy` should be set to `all`. Optional.
`exportFormat`| String or array of formats for file export if exportable is true. Can be set to geojson, gpx or kml. Defaults to geojson.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for editing and displaying attachments
`isTable`| Bool that indicates if the geometry should be ignored. Implies _visible_. Only useful when layer is a child in related layers. Optional. defaults to `false`
`relatedLayers`| Array of [relatedLayers](#Related-layers) objects defining child layers. Optional

Source options | Description
---|---
`url` | url to the wfs endpoint
`strategy` | the ol.loadingstrategy for the layer. Can also be set on layer. The options are tile, bbox or all. Default is bbox.
`clusterOptions` | options for clustering. See the settings page for details.

#### Basic example WFS

```json
{
  "name": "mywfs",
  "title": "My wfs",
  "group": "test",
  "source": "local_wfs",
  "style": "mask",
  "type": "WFS"
}
```
#### Filter example WFS

```json
{
  "name": "mywfs",
  "title": "My wfs",
  "group": "test",
  "source": "local_wfs",
  "style": "mask",
  "type": "WFS",
  "filter": "type = 'urban'"
}
```
#### Multiple layers filter example WFS

```json
[
  {
    "name": "my_custom_name__1",
    "id": "name_on_server",
    "title": "Urban",
    "group": "Urban group",
    "source": "mapserver_wfs",
    "style": "urbanStyle",
    "type": "WFS",
    "filter": "type = 'urban'"
  },
  {
    "name": "my_custom_name__2",
    "id": "name_on_server",
    "title": "Parklands",
    "group": "Parklands group",
    "source": "mapserver_wfs",
    "style": "parklandsStyle",
    "type": "WFS",
    "filter": "type = 'parklands'"
  }
]
```
### AGS_FEATURE
A vector layer created with an ArcGIS Server feature service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`id` | the id of the layer in ArcGIS Server.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For ArcGIS Server feature service the type is AGS_FEATURE.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`editable` | if the layer should be editable or not. Requires the editor control. Defaults to false. Optional.
`allowedEditOperations` | List of available edit tools. Possible values are: _updateAttributes_, _updateGeometry_, _create_, _delete_. Only applies if layer is editable. Defaults to all. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`clusterOptions` | options for clustering. See the settings page for details.
`geometryName` | geometry attribute name. Default is geom.
`filter` | filter are used with query filter [where](http://resources.arcgis.com/en/help/rest/apiref/query.html). Optional.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`featureinfoTitle` | attribute to be used instead of the title property as the title for the popup/sidebar. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for editing and displaying attachments

Source options | Description
---|---
`url` | url to the ArcGIS Server endpoint
`clusterOptions` | options for clustering. See the settings page for details.

#### Basic example AGS_FEATURE

```json
{
  "name": "my_ags_feature",
  "id": "0",
  "source": "local_ags_feature",
  "title": "My ags feature",
  "type": "AGS_FEATURE",
  "style": "mask"
}
```
#### Filter example AGS_FEATURE

```json
{
  "name": "my_ags_feature",
  "id": "0",
  "source": "local_ags_feature",
  "title": "My ags feature",
  "type": "AGS_FEATURE",
  "style": "mask",
  "filter": "type='urban'"
}
```
### VECTORTILE
A vector tile layer.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For vector tiles service the type is VECTORTILE.
`source` | named source of the layer. The [source](#source) must be defined.
`layerURL` | url to the service added to the source url. Mandatory unless layerName and gridset is set. E.g. layerName@gridset@format/{z}/{x}/{-y}.format
`layerName` | the layer name on the webserver, used to build the layerUrl. Mandatory unless layerUrl is set.
`gridset` | the gridset defined on the webserver, used to build the layerUrl. Mandatory unless layerUrl is set.
`format` | format fot the vector tiles. Valid are topojson, geojson and pbf. Mandatory.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`tileGrid` | custom tileGrid for the vector tile layer. extent, alignBottomLeft, resolutions and tileSize can be set.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.

Source options | Description
---|---
`url` | url to the vector tiles endpoint. E.g. http://yourhost/geoserver/gwc/service/tms/1.0.0/
`tileGrid` | custom tileGrid for the vector tile source. extent, alignBottomLeft, resolutions and tileSize can be set.

#### Basic example VECTORTILE

```json
{
  "name": "my_vector_tiles",
  "source": "vector tiles source",
  "title": "My vector tiles",
  "type": "VECTORTILE",
  "style": "customstyle",
  "layerName": "my_vector_tiles",
  "gridset": "my_gridset",
  "format": "pbf"
}
```
### WMS

Property | Description
---|---
`name` | the unique name of the layer used internally and the name of the layer in the WMS service. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For WMS the type is WMS.
`source` | named source of the layer. The [source](#source) must be defined with the layers source options.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`format` | the image format used for the layer. Default is 'image/png' unless format is set for the source.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`gutter` | gutter setting for the layer. Default is 0.
`featureinfoLayer` | the named layer this layer should use for featureinfo requests. Optional.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`tileGrid` | custom tileGrid for the WMS layer. extent, alignBottomLeft, resolutions and tileSize can be set.
`renderMode` | whether to render the layer tiled ('tile') or single tiled ('image'). Defaults to 'tile'.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for displaying attachments
`infoFormat` | Origo's get feature info expects responses in 'application/json' but some WMS servers (f.e. ArcGIS) don't supply it, so it's possible here to request in format 'application/geo+json' or 'application/geojson' if the server response with that format. Optional.

Source options | Description
---|---
`format` | the image format used for the layer unless format is set on layer-level. Default is 'image/png'.
`url` | url to the wms endpoint
`version` | the OGC WMS version. Default is 1.1.1.
`tileGrid` | custom tileGrid for the WMS source. extent, alignBottomLeft, resolutions and tileSize can be set.

#### Basic example WMS

```json
{
  "name": "my_wms",
  "source": "local_wms",
  "title": "My WMS",
  "type": "WMS",
  "style": "mask"
}
```

#### Example with same layer name on different servers

```json
[
  {
    "name": "school__prod",
    "title": "Elementary school",
    "format": "image/png",
    "queryable": false,
    "visible": false,
    "type": "WMS",
    "group": "Elementary",
    "source": "prod",
    "style": "school"
  },
  {
    "name": "school__test",
    "title": "Elementary school",
    "format": "image/png",
    "queryable": false,
    "visible": false,
    "type": "WMS",
    "group": "ElementaryNew",
    "source": "test",
    "style": "school"
  }
]
```

### WMTS

Property | Description
---|---
`name` | the unique name of the layer used internally and the name of the layer in the WMTS service. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For WMTS the type is WMTS.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`format` | the image format to use. Default is image/png.
`featureinfoLayer` | the named layer this layer should use for featureinfo requests. Optional.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`wmtsStyle` | WMTS layer style, if applicable.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for displaying attachments

Source options | Description
---|---
`url` | url to the wmts endpoint
`matrixSet` | the named matrixSet if provided for the source. Default matrixSet is the matrixSet created for the map and depends on the map resolutions.
`matrixIdsPrefix` | the named prefix for tileMatrix. Default matrixIdsPrefix is the maps projection code.


#### Basic example WMTS

```json
{
  "name": "my_wmts",
  "source": "local_wmts",
  "title": "My WMTS",
  "type": "WMTS",
  "style": "mask"
}
```

### XYZ

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For XYZ the type is XYZ.
`layerURL` | path to the image tiles. Can be a absolute path or relative used along with the source url.
`source` | named source of the layer. Can be a absolute path or relative used along with the layerURL. Optional if layerURL is set.
`style` | the name of the referenced [style](#style-basics) to be used for styling the legend. Must be an image and if omitted a generic background map image will be used.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default if tileGrid is not set.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`tileGrid` | If layers tilegrid differs from the map. Optional.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.

Source options | Description
---|---
`url` | url to the xyz endpoint. Used with or instead of layerURL. Optional if layerURL is set.
`tileGrid` | custom tileGrid for the XYZ source. extent, alignBottomLeft, resolutions and tileSize can be set.

#### Basic example XYZ

```json
{
  "name": "my_xyz",
  "title": "My XYZ",
  "type": "XYZ",
  "layerURL": "./data/xyz/{z}/{x}/{y}.png",
  "style": "background-map",
  "maxScale": 50000
}
```

### AGS_MAP
A tiled layer created with an ArcGIS Server map service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided. To be able to reuse layers add after the layer name a double underscore plus a suffix to tell them apart.
`id` | the id of the layer in ArcGIS Server.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For ArcGIS Server map service the type is AGS_TILE.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`renderMode` | can be either image or tile. Default is tile.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minScale` | the minmum scale the layer is visible. Optional.
`maxScale` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`tileGrid` | custom tileGrid for the AGS tile layer. extent, alignBottomLeft, resolutions and tileSize can be set.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.
`attachments`| An [attachment object](#Attachment-configuration) containing configuration for displaying attachments

Source options | Description
---|---
`url` | url to the ArcGIS Server endpoint
`tileGrid` | custom tileGrid for the AGS tile source. extent, alignBottomLeft, resolutions and tileSize can be set.

#### Basic example AGS_MAP

```json
{
  "name": "my_ags_tile",
  "id": "0",
  "source": "local_ags_tile",
  "title": "My ags tile",
  "type": "AGS_MAP",
  "renderMode": "image",
  "style": "mask"
}
```

### OSM
A tiled layer from the OpenStreetMap tile server. Source is OpenLayers default and not configurable.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For OpenStreetMap layer the type is OSM.
`style` | the name of the referenced [style](#style-basics) to be used for the layer. Only visible in the legend, not for styling the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.

#### Basic example OSM

```json
{
  "name": "my_osm_layer",
  "title": "OpenStreetMap",
  "group": "background",
  "type": "OSM",
  "style": "mask"
}
```

### Group
A group layer is a simulated layer that contains several layers. For a user, a group layer looks just like a normal layer in the legend.

Property | Description
---|---
`name` | the unique name (a dummy name) of the layer. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a text in the legend. Optional.
`type` | type of source for the layer. For group layers the type is GROUP.
`style` | the name of the referenced [style](#style-basics) to be used for the layer. Only visible in the legend, not for styling the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`removable` | Adds a _Remove layer_ option to the layer info menu if set to true. Optional.
`zoomToExtent` | Adds a _Zoom To_ option to the layer info menu if set to true. Optional.
`layers` | the included layers. Defined as normal layers.
`opacityControl` | Adds an opacity slider in the legends extended layer info. Optional, defaults to true.
`css` | Used for adding CSS properties to layer canvas element. Formatted as key/value pairs.

#### Basic example group

```json
{
  "name": "dummy_name",
  "title": "My layer",
  "group": "test",
  "style": "mask",
  "type": "GROUP",
  "layers": [
	{
  		"name": "mywfs",
  		"title": "My wfs",
  		"source": "local_wfs",
  		"style": "mask",
  		"type": "WFS"
	},
	{
  		"name": "mywfs",
  		"title": "My wfs",
  		"source": "local_wfs",
  		"style": "mask",
  		"type": "WFS"
	}
	]
}
```

## Source

Sources defined for the map are named under source. Each source is available for a layer by referencing its name.

#### Example defining sources

```json
{
  "source": {
    "local_wms": {
      "url": "http://localhost/geoserver/origo/wms"
    },
    "local_wmts": {
      "url": "http://localhost/geowebcache/service/wmts"
    }
  }
}
```

## Attributes

By default all available attributes for a queryable layer are listed in a featureinfo popup. The content can be customized in several ways, for example to make url:s or embed images. There are two basic approaches to do this. The first is to use a named handlebars template. This is what is used by default but requires a precompiled template. The second approach is to define how each attribute should be presented in the layer configuration. Each attribute is defined within curly brackets with options according the table below.

### Information window

Attribute options | Description
---|---
`name` | the name of the attribute. The value of the attribute will be shown. Optional.
`title` | static label for the attribute. Optional.
`url` | absolute url ('//example.com/nonsense.html') or attribute containing an url. Creates a link automatically and can be combined with name as value. Optional.
`urlPrefix` | a general prefix to be used together with url or img. Optional.
`urlSuffix` | a general suffix to be used together with url or img. Optional.
`target` | default behaviour is to open url in new window (_blank). It's possible to specify other targets as _top, _self and _parent or to open link in an iframe in a modal window which should than be set to modal for normal size or modal-full. Optional.
`targetTitle` | used along with target to define title in modal titlebar and link tooltip. Can be set to "static text" or "{{attribute value}}". Default is url.
`img` | attribute containing url to an image. The image will be embedded. Optional.
`splitter` | set a splitter for example , or ; which is used to split the attribute if it is made up of delimited list of compounded attributes of the same type. To be used together with `url`, `img` and `linktext`. Optional.
`cls` | css class name for custom styling. Optional.
`html` | custom html. Attributes can be referenced be placing the attribute name within double curly brackets.  It also possible in a similar way to insert functions, for example getCenter which is written as `{{@center}}`. Arguments can be added, for example `{{@center(EPSG:4326,reverse)}}` to get the center coordinates in EPSG:4326 with reversed coordinates (or `{{@center(EPSG:4326,default)}}` to maintain the axis orientation after transformation). The `html` option can't be combined with any of the other options, except for `cls`. Optional.
`linktext` | Name of attribute that holds the text that should be used on links when using `url` in combination with `splitter`. Optional.
`prefix` | adds the text entered in front of the attribute value. Optional.
`suffix` | adds the text entered after the attribute value. Optional.

#### Example defining layer attributes

```json
{
  "name": "mygeojson",
  "title": "My geojson with custom attributes",
  "source": "data/mylayer.geojson",
  "style": "mask",
  "type": "GEOJSON",
  "attributes": [
    {
      "name":"NAME",
      "title": "Name: ",
      "url": "PAGEID",
      "urlPrefix":"http://my.link.com/",
      "urlSuffix":".html"
    },
    {
      "html": "<p>For more information contact {{CONTACT}} at {{PHONE}}</p>",
      "cls": "o-custom-class-name"
    }
  ]
}
```


### Editor attributes

When editing a layer, additional attributes are supported to control the behaviour of the edit attributes tool.

Attribute option | Description
---|---
`type` | The attribute type. Determines which edit control is used. See [Editor attribute types](#editor-attribute-types)  (required)
`allowBatchEdit` | _bool_ true if allowed to update a selection of features with the same value (optional)
`config` | _object_ Additional configuration for searchList
`constraint` | _string_  \<event\>:\<attribute name\>:\<value\> or \<event\>:\<attribute name\>:[\<value1\>,\<value2\>, ...], where \<event\> is the event that the \<attribute name\> input emits, most likely `change`. Attribute is only editable when \<attribute name\> has value \<value\> (optional)
`list` | _array of strings_ or _array of list object_. List of possible values for searchList. (optional)
`maxLength` | _int_ Maximum number of characters (optional)
`options` | _array of strings_ List of allowed values. Required for type `dropdown` (optional)
`readonly` | _bool_ True if attribute should be displayed but not allowed to edit (optional)
`required` | _bool_ True if the attribut must have a value (optional)
`defaultValue` | _string_ or _object_. When type is string that string is used as default value on feature creation. When it is an object a _defaultValue_ object defines behaviour (optional)


**Editor attribute types**

type | format | required | readonly | maxLength | constraint | Description
---|---|---|---|---|---|---
`text`      | string | supported | supported | supported || Text input
`textarea`  | string | supported | supported | supported || Text input with resizable box
`dropdown`  | string || supported || supported | Dropdown based on options values
`checkbox`  | boolean || supported ||| Checkbox, defaults to false. Use checked:true for true
`image`     | base64 || supported ||| Uploads image
`color`     | hexadecimal || supported ||| Activates a color-picker
`time`      | hh:mm:ss | supported | supported ||| Defaults to current time. Use defaultTime:false to not.
`date`      | YYYY-MM-DD | supported | supported ||| Defaults to current date. Use defaultDate:false to not.
`datetime`  | YYYY-MM-DD hh:mm:ss | supported | supported ||| Defaults to current date. Use defaultDatetime:false to not.
`email`     | string | supported | supported ||| Email address
`url`       | string | supported | supported ||| Homepage address
`integer`   | integer | supported | supported ||| Whole number
`decimal`   | decimal | supported | supported ||| Decimal number
`searchList`   | string | supported ||supported. Defaults to 50|| Dropdown based on options values with search capabilities. 
`hidden` | string ||||| Not visible to the user. 

**searchList List object**

Defines the possible values in a _searchList_

Property | Description | Required | Default value
---|---|---|---
`value` | _string_ text to display | When _location_ is not specified | 
`src`| _url_ to an image that will be displayed next to _value_. Url is relative to app or absolute | No |
`location`| _url_ to a HTML page that contains links to images. All a-tags hrefs that matches _extension_ will be used as list items. Filename will appear as text and the image itself as a thumbnail next to the text. If _location_ is specified it must be only item in list | No |
`extension` | Filename extension without dot to filter links when using _location_ | When _location_ is specified |

**searchList Config object**
An object that defines additional configuration for searchList

Property | Description | Required | Default value
---|---|---|---
`url`| Url (GET) that responds with a JSON _array of List object_ (_location_ not supported) or _array of string_. If specified, _list_ property is ignored. | No  |
`dynamic` | _true_ if _url_ should be queried for each keypress. The user input is appended to _url_ as a query parameter. The server should return a list of matching search items. The exact algorithm is up to the server, but origo will assume the list is filtered and sorted so the list will be displayed as is as suggestions, but will be truncated to maxItems. If the server's algorithm is not based on substrings of the value, the highlighting may not work as expected. | No | false
`queryParameter` | Name of query parameter to use to send user input to _url_ when _dynamic_ is _true_| No | "input"
`allowOnlyFromList` | _true_ if the user only can input values from the list, which makes it work like a searchable drop down. | No | _false_
`disallowDropDown` | _true_ to allow the user to click the down arrow (or enter) when input is empty and get all possible suggestions even if minChar has not been reached. | No | _false_ 
`minChars` | Number of character that must be written before suggestions are displayed. | No | 2
`maxItems`| Number of suggestion items to display | No | 10
`typeMoreText` | The text to show to the user if the input has less then _minChar_ characters. | No | "Skriv fler tecken"
`noHitsText` | The text to show to the user if there are no suggestions to show. | No | "Inga träffar"

**defaultValue object**
The defaultValue object controls how an attribute's default value is handled. Default values are always set when creating new features, and can optionally be set when updating attributes.
Default values can be overridden in the attribute editor unless attribute is configured as readonly or hidden.

Property | Description | Required | Default value
---|---|---|---
`type` | Source of default value. One of `sessionStorage`, `localStorage`, `timestamp`. If `timestamp` is specified it overrules default values for input types `time`, `date` and `datetime` | Yes | 
`key`| key in sessionStorage or localStorgage | When `type` is `localStorage` or `sessionStorage` |
`updateOnEdit`| `true` if default value should be applied when editing as well as creating a new feature. | No | `false`
`timeStampFormat`| One of `time` = "HH:mm:ss", `date`= "yyyy-MM-dd", `datetime` = "yyyy-MM-dd HH:mm:ss", `timestamp` = "yyyy-MM-ddTHH:mm:ss | No | `timestamp`
`useUTC` | `true`if time should be in UTC, otherwise local time | No | `false`





#### Example editor attributes

```json

{
  "name": "art",
  "title": "Art: ",
  "type": "text",
  "maxLength": 64,
  "readonly": true,
}
{
  "name": "category",
  "title": "category: ",
  "type": "dropdown",
  "options": [
      "category_1",
      "category_2",
      "category_3"
  ]
}
{
  "name": "subcategory",
  "title": "subcategory: ",
  "type": "dropdown",
  "constraint": "change:category:category_1",
  "options": [
      "subcategory_1",
      "subcategory_2",
      "subcategory_3"
  ]
}
{
  "name": "choice",
  "title": "choice: ",
  "type": "dropdown",
  "options": [
      "choice 1",
      "choice 2",
      "choice 3"
  ]
}
{
  "name": "subchoice",
  "title": "subchoice: ",
  "type": "dropdown",
  "constraint": "change:choice:[choice 1,choice 3]",
  "options": [
      "subchoice 1",
      "subchoice 2",
      "subchoice 3"
  ]
}
{
  "name": "sprak",
  "title": "Språk: ",
  "type": "searchList",
  "list": [
      {
        "value": "Java"
      },
      ...
  ],
  "config": {
    "minChars": 2,
    "maxItems": 15
  }
}
{
  "name": "icons",
  "title": "Ikoner: ",
  "type": "searchList",
  "list": [
    {
      "src": "img/kompass.svg",
      "value": "Riktning"
    },
    ...
  ],
  "config": {
    "minChars": 0,
    "maxItems": 5
  }
}
{
  "name": "icon-lib",
  "title": "Bibliotek: ",
  "type": "searchList",
  "list": [
    {
      "location": "img/png",
      "extension": "png"
    },
    ...
  ],
  "config": {
    "minChars": 0,
    "maxItems": 5
  }
}

```

#### Example Default Values. Readonly user, hidden timestamp.
```json
"attributes": [
        {
          "name": "user",
          "title": "Edited by",
          "type": "text",
          "readonly": true,
          "defaultValue": {
            "type": "sessionStorage",
            "key": "loggedInUser",
            "updateOnEdit": true
          }
        },
        {
          "name": "lastUpdate",
          "type": "hidden",
          "defaultValue": {
            "type": "timestamp",
            "updateOnEdit": true,
            "useUTC":  true
          }
        }
 ]
```

## Attachments
While attributes are taken from each feature itself in a layer, an attachment is a file that
is stored somewhere else but can be treated as an attribute. An attachment is typically an
image or document that relates to a special feature and for practical reasons can not be stored in an attribute.
Attachments can be viewed, added and removed by the user in the editor form and viewed in featureInfo as links or emedded as images.

Attachments are configured on each layer. It can be configured
for both raster and vector layers, but can only be edited on vector layers.
In order to use attachments, an attachment server is needed. The attachment server must implement the arcgis server
rest api for attachments.

- _attachment Infos_ https://developers.arcgis.com/rest/services-reference/enterprise/attachment-infos-feature-service-.htm
- _attachment_ https://developers.arcgis.com/rest/services-reference/enterprise/attachment-feature-service-.htm
- _add attachment_ https://developers.arcgis.com/rest/services-reference/enterprise/add-attachment.htm
- _delete attachment_ https://developers.arcgis.com/rest/services-reference/enterprise/delete-attachments.htm


Optionally the server can extend the AGS interface by adding the concept
of attachment groups in order to group attachments in different groups. Groups can be used to have
different rules and display them differently. AGS server can be used out-of-the-box for AGS layers, but the extented
format must be implemented as a server side component.

The extensions to the AGS format are:

- The response from _attachments infos_ must include a "group" property for each attachmentInfo object
- The request to _addAttachment_ must include a "group" parameter

A reference implementation of the extended
format is available here: https://github.com/ornskoldsvikskommun/attachmentServer-reference It
should not be used for production environments as it lacks security, performance and
flexibilty.

### Attachment configuration
Attachments are configured on each layer using the `"attachments"` property containing an object with the following properties.

Property | Description | Required | Default value
---|---|---|---
`url` | The base adress for the attachment server. | Yes
`formTitle` | Title of section in editor form | No | 'Bilagor'
`format` | The format to use. 'origo' or 'arcgis'. 'origo' extenteds the AGS format by using groups | No | 'origo'
`foreignKey` | Name of the attribute in the parent feature that contains the private key. | No | Uses id of feature
`stripLayerNameFromId` | Removes layer name from featureid when _foreignKey_ is not specified. Useful when using geoserver wfs services to get only database FID as private key. | No | _true_
`layerId` | The layer id in the attachment server. | No | _Layer name_
`groups` | Array of [group objects](#Group-object) defining an attachment group. A group has its own title and each group is treated as a separate attribute. At least one group has to be specified. If format is "arcgis" exactly one group must be specified | Yes |


### Group object

Property | Description | Required | Default value
---|---|---|---
`name` | Name of the group on the attachment server. Ignored for format 'arcgis' | Yes |
`title` | Title displayed in the editor. Ignored for format 'arcgis' | No | `name`
`linkAttribute` | Name of an attribute to create on a feature containing all links as a semicolon separated list. Can be used to create links in featureInfo using the _img_ or _url_ property. | No |
`fileNameAttribute` | Name of an attribute to create on a feature containing all filename as a semicolon separated list. Order is same as linkAttribute list. Can be used in combination with _linkAttribute_ to set link text using the _linktext_ property | No
`allowedFiles` | Comma separated list of valid file extensions and mime types that are allowed to upload. Format is accordning to the accept attribute of https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file | No | *

#### Example attachment configuration
```json
"attachments": {
        "formTitle" : "Attachments",
        "layerId": "entity_blob",
        "url": "http://gis.kommun.org/attachmentserver/",
        "groups": [
          {
            "name": "proto",
            "title": "Protocols",
            "allowedFiles": ".pdf"
          },
          {
            "name": "public",
            "title": "Public Image",
            "allowedFiles": ".jpg,.png",
            "linkAttribute": "pictureLinks",
            "fileNameAttribute": "pictureTexts"

          }
        ]
      }
```

#### Example display attachments in featureinfo configuration
```json
"attributes": [
    {
        "title": "Images",
        "linktext": "pictureTexts",
        "url": "pictureLinks",
        "splitter": ";"
     }
]
```

## Related Layers
A related layer is a layer that is a child in a _1-to-many_ relationship. Origo supports related layers for WFS layers by
defining a _private-foreign key relation_ between layers. The layers do not have to be in the same database or be servered from
the same WFS server. The relation is only stored in the child object, which makes it suitable for adding attributes
to a table that is considered read only.
A layer can have several child layers and a child layer can have child layers of its own.

Entries in the child layer can be added, deleted and edited through the parent's edit form and does not have a geometry of its own. Child objects may have a geometry,
but there is not support to edit or add new geometries other that edit the child layer directly.

Attributes from child layers can be aggregated and displayed in the featureInfo window of the parent.

### Related layers Configuration
All configuration regarding the relation is performed on the parent layer. The child layer must be configured as an ordinary wfs layer and most likely configured with
`'isTable': true`. The child layer can use `'strategy': 'bbox'` even if it is a table. In that case related objects are fetched when the parent is edited or featureInfo
is displayed

Relations are configured on the parent layer using the `"relatedLayers"` property containing an array of objects with the following properties.

Property | Description | Required | Default value
---|---|---|---
`layerName` | Name of the child layer as already configured as a layer | Yes |
`PK`| Name of the field that holds the private key in the parent object. | No | featureid (omit for featureid as that can not be explicitly set)
`stripPK` | If PK is featureid, remove layer name part from featureid when joining. Useful to keep only the fid part as FK in the database. | No | true
`FK` | Name of field in child that holds the foreign key. When a new entry is created this field will be updated with the value of PK of the parent. | Yes |
`FKIsString` | Has to be `true` if the FK field datatype in database is string. | No | false
`childTitle`| The title (string) that will be displayed above all child elements in the parent's attributes editor | No | Child layer's `title`
`featureTitle`| Name of the attribute that holds the text that will be displayed in the parent's attribute form for each feature | No | featureid
`maxChildren`| Number of children that can be added. | No | Unlimited
`cascadingDelete`| How to handle if parent is deleted. Can be one of `'cascade'` : delete recursively, both in database and in local layer. `'db'`: Assume database has cascading delete and only recursively delete locally. `'none'`:  Do nothing. Child remains both locally and in db, orphaned | No | `'none'`
`disableAdd` | `true` if the add button in the parent's edit form should be disabled for this layer| No | false
`disableDelete` | `true` if the delete button in the parent's edit form should be disabled for this layer | No | false
`disableEdit` | `true` if the edit button in the parent's edit form should be disabled for this layer | No | false
`promoteAttribs`| An array of [promoteAttrib objects](#promoteAttrib-object) that defines how attributes are aggregated and available to the parent in featureInfo | No | None


### promoteAttrib object

Each entry creates an attribute on the parent by first extract an expression from each child and then aggregate the
result from all children. Currently the only supported aggregation function is _string.join()_

Property | Description | Required | Default value
---|---|---|---
`parentName` | Name of the attribute to create in the parent | Yes |
`html` | Template string that extracts values from each child object. Attribute names enclosed in `{{}}` are replaced with its value. Does not have to be html, but can contain html tags | Yes
`separator` | String to use as separator when aggregating extracted strings | No | Empty string

#### Example related tables configuration
Basic example to set up a parent which has a related child layer. The parent itself is not editable, but the child layer has two attributes that can be edited. Also
the attributes from the child layer is aggregated and displayed in the featureInfo window of the parent.

```json
{
  "layers": [
    {
      // This is the child layer
      "name": "sf:person",
      "source": "local_wfs",
      "type": "WFS",
      "isTable": true,
      "attributes": [
        {
          "name": "name",
          "type": "text"
        },
        {
          "name": "org",
          "type": "text"
        }
      ]
    },
    {
      // This is the parent layer
      "name": "sf:property",
      "queryable": true,
      "group": "root",
      "source": "local_wfs",
      "type": "WFS",
      "geometryName": "the_geom",
      "geometryType": "Point",
      "visible": true,
      "editable": true,
      "allowedEditOperations": [
        "updateAttributes"
      ],
      "attributes": [
        {
          "name": "adress",
          "type": "text",
          "readonly": true
        },
        {
          // This is the temporary attribute created by related table configuration
          "name": "responsible",
        }
      ],
      "relatedLayers": [
        {
          "layerName": "person",
          "FK": "parent_fid",
          "featureTitle": "name",
          "promoteAttribs": [
            {
              "parentName": "responsible",
              "html": "<p><b>{{name}},</b>{{org}}</p>"
            }
          ]
        }
      ]
    }
  ]
}
```
