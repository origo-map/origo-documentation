## Basic settings

Basic settings for the application include map options such as projection and extent. Note that all OpenLayers map and view settings of string, number or boolean type (or arrays/objects thereof) can be set in the config file, on the first level. Please see the OpenLayers [map](https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#Map) or [view](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#View) documentation for more information about available settings.

### Page settings

With the pageSettings object you can define a footer and control the visibility of the map grid.

#### Example page settings definition

```json
{
"pageSettings": {
  "footer": {
    "img": "img/png/logo.png",
    "url" : "https://github.com/origo-map/origo",
    "text": "Origo"
  },
  "mapGrid": {
    "visible": true
  },
  "mapInteractions": {
    "embedded": false
  }
}
}
```

### footer

Name | Type | Description
---|---|---
`img` | string | URL or file path to an image.
`text` | string | Text to be displayed.
`url` | string | Sets the URL for a link.

### mapGrid

Name | Type | Description
---|---|---
`visible` | boolean | Sets the visibility of the map grid. Default is false.

### mapInteractions

Name | Type | Description
---|---|---
`embedded` | boolean | Sets if special map interactions for embedded maps should be used or not. Default is true.

### Map projection
The map projection is defined with the mandatory property projectionCode. If the projection is EPSG:3857 (Web mercator) or EPSG:4326 (WGS84) then the proj4Defs is optional, otherwise it is mandatory. An optional projection extent can also be set. Projections are handled with the proj4js library. The Proj4js definitions can be found on [epsg.io](http://epsg.io/).

#### Example projection definition

```json
{
"projectionCode": "EPSG:3010",
"proj4Defs": [
      {
          "code": "EPSG:3010",
          "alias": "urn:ogc:def:crs:EPSG::3010",
          "projection": "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
      }
],
"projectionExtent": [
  -1678505.1838360203,
  4665380,
  2431912.7361639794,
  8775797.92
]
}
```

### proj4Defs

Name | Type | Description
---|---|---
`proj4Defs` | array | The proj4 definitions for projections used in the map. Several projections can be definied but the projection set as projectionCode will be the map projection. Each projection is defined as an object. Visit [epsg.io](http://epsg.io/) to find proj4 definitions. EPSG:3857 (Web mercator) and EPSG:4326 (WGS84) doesn't need to be defined.

Name | Type | Description
---|---|---
`code` | string | The EPSG-name.
`alias` | string | An optional EPSG alias.
`projection` | string | The Proj4js definition for the projection.

### projectionCode

Name | Type | Description
---|---|---
`projectionCode` | string | The EPSG-name for the projection that will be used when the map is created. Visit [epsg.io](http://epsg.io/) to find the EPSG-code.

### projectionExtent

Name | Type | Description
---|---|---
`projectionExtent` | array | Extent that will be set for the projection.

### extent

Name | Type | Description
---|---|---
`extent` | array | Constraining extent for map layers.

### center

Name | Type | Description
---|---|---
`center` | array | The intial center coordinates for the map.

### zoom

Name | Type | Description
---|---|---
`zoom` | number | Initial zoom level for the map.

### resolutions

Name | Type | Description
---|---|---
`resolutions` | array | The resolutions used to define available zoom levels for the map. The resolutions should be valid for the base maps.

### groups

Name | Type | Description
---|---|---
`groups` | array | Define groups to organise layers. The group names are used in the legend control. Each group is defined as an object. A group can contain subgroups, defined as groups within a group.

Name | Type | Description
---|---|---
`name` | string | Name of the group that identifies the group. Each name must be unique.
`title` | string | A title for the group. The title is visible for the user in the legend control.
`abstract` | short description of the group. Adds a show info button to the layer in legend. Optional.
`expanded` | boolean | Whether the group should be expanded not. Used by the legend control. Default is false.
`autoExpand` | boolean | For subgroups. Whether the subgroup should be expanded/collapsed when toggling the subgroups checkbox. Used by the legend control. Default is true.
`groups` | array | Array of group objects defining subgroups. Optional."exclusive": true
`exclusive` | boolean | Setting to true will prevent activating more than one layer in the group. Defaults to false.

#### Example groups

```json
{
"groups": [
    {
      "name": "GROUP",
      "title": "GROUP",
      "abstract": "This is parents group",
      "groups": [
        {
          "name": "group",
          "title": "group",
          "abstract": "This is childrens group",
          "exclusive": true
        }
      ]
    }
]
}
```

### featureinfoOptions

Property | Type | Description
---|---|---
`clusterFeatureinfoLevel` | number | Zoom level where cluster layers will be identifiable. Default is 1.
`pinning` | boolean | Option to enable/disable pinning. If enabled a pin will be placed where clicked in places with no identifiable features. Default is true.
`hitTolerance` | number | Option to set the hit tolerance in pixels. Features within this tolerance from a click will be considered. This makes it easier to click features on touch devices. Default is 0.
`infowindow` | string | Option to show featureinfo in overlay, sidebar or infowindow. Default is overlay.
`infowindowOptions` | object | Options for infowindow. Currently only useful when using infowindow as infowindow. See options below. Optional.
`selectionStyles` | object | Option to set custom selection style. Optional.
`multiSelectionStyles` | object | Option to set custom selection style for selected and highlighted features when using infowindow as infowindow. Optional.
`toggleSelectOnClick` | boolean | Option to enable/disable selection toggling. Used with the multiselection plugin and defaults to false.
`changePointerOnHover` | boolean | When set to true, the mouse pointer changes when hovering over a clickable object. Optional. Defaults to false.

#### infowindowOptions

Name | Type | Description
---|---|---
`title` | string | Infowindow header text. Default is "Träffar".
`export` | object | Defines settings for the export. Two export options are possible, send objects with simple export and with layer specific export. Currently only attributes can be send with this function.

##### Export properties

Name | Type | Description
---|---|---
`simpleExportUrl` | string | Url to a service. Exports all attributes from the layer source. Can be used with excel creator in Origo server.
`simpleExportLayers` | array | Defines layers that can export selected objects.
`exportedFileName` | string | File name and file extension for the export. The file extension must match the file extension from the service. Required.
`simpleExportButtonText` | string | The button text shown in the infowindow. Default is "Export".
`toasterMessages` | object  | Status message to the user. Defines messages for "success" and "fail". Default message is "Success!" and "Sorry, something went wrong, please contact your administrator." Currently only fail message is shown.
`layerSpecificExport` | array | Specific export options per layer. Defines attributes, file name and service url for the export. Each layer is defined as an object.

##### LayerSpecificExport properties

Name | Type | Description
---|---|---
`layer` | string | Defines layers that can export selected objects.
`attributesToSendToExport` | array | Attributes to send to the export service.
`exportUrls` | array | Defines settings for the export. A layer can have multiple exports. Each export is defined as an object.

##### ExportUrls properties

Name | Type | Description
---|---|---
`url` | string | Url to a service. Required.
`buttonText` | string | The button text shown in the infowindow. Default is "Export".
`exportedFileName` | string | File name and file extension for the export. The file extension must match the file extension from the service. Required.


#### Example featureinfoOptions with overlay as infowindow

```json
{
  "featureinfoOptions": {
    "clusterFeatureinfoLevel": 3,
    "infowindow": "overlay",
    "pinning": false,
    "hitTolerance": 3,
    "selectionStyles": {
      "Point": [{
        "circle": {
          "radius": 5,
          "stroke": {
            "color": [0, 153, 255, 1],
            "width": 0
          },
          "fill": {
            "color": [0, 153, 255, 1]
          }
        }
      }],
      "LineString": [{
        "stroke": {
          "color": [255, 255, 255, 1],
          "width": 5
        }
      },
      {
        "stroke": {
          "color": [0, 153, 255, 1],
          "width": 3
        }
      }],
      "Polygon": [{
        "stroke": {
          "color": [255, 255, 255, 1],
            "width": 5
          }
        },
        {
          "stroke": {
            "color": [0, 153, 255, 1],
            "width": 3
          }
        }
      ]
    }
  }
}
```
#### Example featureinfoOptions with infowindow as infowindow

```json
{
  "featureinfoOptions": {
    "clusterFeatureinfoLevel": 3,
    "pinning": false,
    "hitTolerance": 3,
    "infowindow": "infowindow",
    "infowindowOptions": {
            "title": "Testtitel",
            "export": {
              "simpleExportUrl": "url_to_service",
              "simpleExportLayers": ["layer_1","layer_2"],
              "exportedFileName": "filename_1.xlsx",
              "simpleExportButtonText": "Send to excel",
              "toasterMessages": {
                  "success": "OK!",
                  "fail": "Sorry!"
              },
              "layerSpecificExport": [
                {
                  "layer": "layer_3",
                  "attributesToSendToExport": ["attribute_1","attribute_2"],
                  "exportUrls":[
                    {
                      "url": "url_to_service",
                      "exportedFileName": "filename_2.xlsx",
                      "buttonText": "Send to Excel"
                    },
                    {
                      "url": "url_to_service",
                      "exportedFileName": "filename_2.docx",
                      "buttonText": "Send to word"
                    }
                  ]
                }
              ]
            }
          },
    "multiSelectionStyles": {
          "selected": [
            {
              "fill": {
                "color": [100,153,255,0.1]
              },
              "stroke": {
                "color": [100,153,255,1],
                "width": 3
              },
              "circle": {
                "radius": 5,
                "stroke": {
                  "color": [100,153,255,1]
                },
                "fill": {
                  "color": [100,153,255,1]
                }
              }
            }
          ],
          "highlighted": [
            {
              "zIndex": 1,
              "fill": {
                "color": [245,66,236,0.25]
              },
              "stroke": {
                "color": [255,255,255,1],
                "width": 6
              },
              "circle": {
                "radius": 5,
                "stroke": {
                  "color": [245,66,236,1]
                },
                "fill": {
                  "color": [245,66,236,1]
                }
              }
            },
            {
              "zIndex": 2,
              "stroke": {
                "color": [66,245,105,1],
                "width": 2
              },
              "circle": {
                "radius": 10,
                "stroke": {
                  "color": [66,245,105,1]
                },
                "fill": {
                  "color": [66,245,105,0.1]
                }
              }
            }
          ]
        }
  }
}
```
### clusterOptions
Can also be set on layer or source level.

Property | Type | Description
---|---|---
`clusterDistance` | number | The distance in pixels within which features will be clustered. Default is 60.
`clusterMaxZoom` | number | The zoom level where the features no longer will be clustered. Default is the last zoom level.

#### Example clusterOptions

```json
{
  "clusterOptions": {
    "clusterDistance" : 40,
    "clusterMaxZoom" : 2
  }
}
```

### tileGridOptions

Property | Type | Description
---|---|---
`alignBottomLeft` | boolean | Whether to align grid to top or bottom left corner. Default is true.
`extent` | array | Extent for the tilegrid. Used to calculate the tiles position. If omitted maps extent is used.
`minZoom` | number | Minimum zoom level. Defaults to 0.
`resolutions` | array | Resolutions for the tilegrid. If omitted maps resolutions are used.
`tileSize` | number or array | Size of tiles in the tileGrid. Default is [256,256]

#### Example tileGridOptions

```json
"tileGridOptions": {
  "alignBottomLeft": false,
  "tileSize": 512
}
```
