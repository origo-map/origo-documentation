## Layers

A layer included in the map can be either vector or raster. It can be a file such as geojson or a service such as WFS.

### GEOJSON

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
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
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.

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
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.

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
`title` | title for the layer visible to the user.
`type` | type of source for the layer. For WFS source the type is WFS.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`geometryName` | geometry attribute name. Default is geom.
`filter` | filter provided as [cql](http://docs.geoserver.org/latest/en/user/tutorials/cql/cql_tutorial.html). Optional.

Source options | Description
---|---
`url` | url to the wfs endpoint

#### Basic example WFS

```json
{
  "name": "mywfs",
  "title": "My wfs",
  "group": "test",
  "source": "local_wfs",
  "style": "mask",
  "type": "WFS",
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
  "filter": "type = 'urban'",
}
```
### AGS_FEATURE
A vector layer created with an ArcGIS Server feature service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`id` | the id of the layer in ArcGIS Server.
`title` | title for the layer visible to the user.
`type` | type of source for the layer. For ArcGIS Server feature service the type is AGS_FEATURE.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`layerType` | option to set how the vector layer should be rendered. The options are cluster, [image](https://openlayers.org/en/latest/apidoc/ol.source.ImageVector.html) or vector. Default is vector.
`clusterStyle` | the style to be used for clustered features. Is required if layerType cluster is used.
`geometryName` | geometry attribute name. Default is geom.
`filter` | filter are used with query filter [where](http://resources.arcgis.com/en/help/rest/apiref/query.html). Optional.

Source options | Description
---|---
`url` | url to the ArcGIS Server endpoint

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
  "filter": "type='urban'",
}
```
### WMS

Property | Description
---|---
`name` | the unique name of the layer used internally and the name of the layer in the WMS service. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`type` | type of source for the layer. For WMS the type is WMS.
`source` | named source of the layer. The [source](#source) must be defined with the layers source options.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`gutter` | gutter setting for the layer. Default is 0.
`featureinfoLayer` | the named layer this layer should use for featureinfo requests. Optional.

Source options | Description
---|---
`url` | url to the wms endpoint
`version` | the OGC WMS version. Default is 1.1.1.

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
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.
`format` | the image format to use. Default is image/png.
`featureinfoLayer` | the named layer this layer should use for featureinfo requests. Optional.
`matrixSet` | the named matrixSet if provided for the source. Default matrixSet is the matrixSet created for the map and depends on the map resolutios.

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

### AGS_TILE
A tiled layer created with an ArcGIS Server map service.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`id` | the id of the layer in ArcGIS Server.
`title` | title for the layer visible to the user.
`type` | type of source for the layer. For ArcGIS Server map service the type is AGS_TILE.
`source` | named source of the layer. The [source](#source) must be defined.
`style` | the name of the referenced [style](#style-basics) to be used for the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`queryable` | if featureinfo should be enabled for the layer. Default is true.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`legend` | if the layer should be included in the map legend. Default is false.
`attribution` | attribution for the layer. Optional.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.
`minResolution` | the minmum scale the layer is visible. Optional.
`maxResolution` | the maximum scale the layer is visible. Optional.
`attributes` | definition of [attributes](#attributes) and how they should be presented in featureinfo. If not provided all available attributes will be shown with a standard template.

Source options | Description
---|---
`url` | url to the ArcGIS Server endpoint

#### Basic example AGS_TILE

```json
{
  "name": "my_ags_tile",
  "id": "0",
  "source": "local_ags_tile",
  "title": "My ags tile",
  "type": "AGS_TILE",
  "style": "mask"
}
```

### OSM
A tiled layer from the OpenStreetMap tile server. Source is OpenLayers default and not configurable.

Property | Description
---|---
`name` | the unique name of the layer used internally. White spaces and special characters should be avoided.
`title` | title for the layer visible to the user.
`type` | type of source for the layer. For OpenStreetMap layer the type is OSM.
`style` | the name of the referenced [style](#style-basics) to be used for the layer. Only visible in the legend, not for styling the layer.
`group` | group the layer belong to. If group is not provided it will not be included in legend. Optional.
`opacity` | opacity of the layer. Value between 0 and 1. Default is 1.
`visible` | if the layer should be visible. Default is true.
`extent` | extent of the layer. Map extent is default.

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
`html` | custom html. Attributes can be referenced be placing the attribute name within double curly brackets. This option can't be combined with any of the other options. Optional.

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
      "urlSuffix":".html",      
    },
    {
      "html": "<p>For more information contact {{CONTACT}} at {{PHONE}}</p>"
    }    
  ]
}
```
