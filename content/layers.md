## Layers

A layer included in the map can be either vector or raster. It can be a file such as geojson or a service such as WFS.

### GEOJSON

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer that is shown when the layer name is clicked in the legend. Optional.
`type` | type of source for the layer. For GeoJSON source the type is GEOJSON.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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

### TopoJSON

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
`name` | the unique name of the layer used internally and the name of the layer in the wfs service. White spaces and special characters should be avoided.
`id` | the id or ids used to identify the layers in the map server. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For WFS source the type is WFS.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`editable` | if the layer should be editable or not. Requires the editor control. Defaults to false. Optional.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
{
  "name": "my_custom_name",
  "id": "name_on_server",
  "title": "Urban",
  "group": "Urban group",
  "source": "mapserver_wfs",
  "style": "urbanStyle",
  "type": "WFS",
  "filter": "type = 'urban'"
},
{
  "name": "my_custom_name",
  "id": "name_on_server",
  "title": "Parklands",
  "group": "Parklands group",
  "source": "mapserver_wfs",
  "style": "parklandsStyle",
  "type": "WFS",
  "filter": "type = 'parklands'"
}
```
### AGS_FEATURE
A vector layer created with an ArcGIS Server feature service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`id` | the id of the layer in ArcGIS Server.
`title` | title for the layer visible to the user.
`abstract` | short description of the layer. Adds a show info button to the layer in legend. Optional.
`type` | type of source for the layer. For ArcGIS Server feature service the type is AGS_FEATURE.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`editable` | if the layer should be editable or not. Requires the editor control. Defaults to false. Optional.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
`name` | the unique name of the layer used internally and the name of the layer in the WMS service. White spaces and special characters should be avoided.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
### WMTS

Property | Description
---|---
`name` | the unique name of the layer used internally and the name of the layer in the WMTS service. White spaces and special characters should be avoided.
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
`matrixSet` | the named matrixSet if provided for the source. Default matrixSet is the matrixSet created for the map and depends on the map resolutios.
`searchable` | used with includeSearchableLayers in search control.  Can be set to 'always', true (when visible) or false.
`removable` | Adds an remove button next to the layer name if set to true. Optional.

Source options | Description
---|---
`url` | url to the wmts endpoint

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

### AGS_MAP
A tiled layer created with an ArcGIS Server map service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
`removable` | Adds an remove button next to the layer name if set to true. Optional.

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
`removable` | adds a remove button next to the layer name if set to true. Optional.
`layers` | the included layers. Defined as normal layers.

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

Attribute options | Description
---|---
`name` | the name of the attribute. The value of the attribute will be shown. Optional.
`title` | static label for the attribute. Optional.
`url` | attribute containing an url. Creates a link automatically and can be combined with name as value. Optional.
`urlPrefix` | a general prefix to be used together with url or img. Optional.
`urlSuffix` | a general suffix to be used together with url or img. Optional.
`img` | attribute containing url to an image. The image will be embedded. Optional.
`cls` | css class name for custom styling. Optional.
`html` | custom html. Attributes can be referenced be placing the attribute name within double curly brackets.  It also possible in a similar way to insert functions, for example getCenter which is written as `{{@center}}`. Arguments can be added, for example `{{@center(EPSG:4326,reverse)}}` to get the center coordinates in EPSG:4326 with reversed coordinates (or `{{@center(EPSG:4326,default)}}` to maintain the axis orientation after transformation). The html option can't be combined with any of the other options. Optional.

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
      "html": "<p>For more information contact {{CONTACT}} at {{PHONE}}</p>"
    }
  ]
}
```
