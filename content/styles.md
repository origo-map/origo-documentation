## Style basics

Styles are primarily used to style vector features in Origo but are also used to create layer legends. This means that all layers in Origo should have a style.

Styles are created using [OpenLayers styles](https://openlayers.org/en/latest/apidoc/ol.style.html). In OpenLayers styles are created as JavaScript functions but in Origo the creation is simplified and only json syntax is used. All styles must have a name which is used to reference the style from a layer. A simple GeoJson layer example can be seen to the right.

Styles can be compared to building blocks. The smallest building block is a style which can be a fill, stroke, circle, icon or text. These styling blocks can be put together for example to style a polygon layer with a fill, stroke and text style. By combining these blocks more complex styling can be made. Two levels of styling are available where each level is delimited by brackets. The outer level is used to separate styles with filters, see the example [thematic styling](#thematic-styling). The inner level is used to add layers of various styles, see the example [combining styles](#combining-styles). The two levels of brackets must always be provided even if only one fill style is used.

For more advanced styling it is possible to use a custom style function. This function has to be included in the /src/style/stylefunctions.js. You will still need an usual style/icon for display in the legend. [Example](#custom-style-function)

#### Example defining a layer style

```json
{
  "name": "mylayer",
  "title": "My layer",
  "source": "data/layer.geojson",
  "style": "mask",
  "type": "GEOJSON",
  "visible": true
}
```

```json
{
  "styles": {
      "mask": [
        [
          {
            "stroke": {
              "color": "rgba(0,0,0,1.0)"
            },
            "fill": {
              "color": "rgba(0,0,0,0.5)"
            }
          }
        ]
      ]
  }
}
```


### Fill

A fill style can be defined with the OpenLayers options for a [Fill](https://openlayers.org/en/latest/apidoc/ol.style.Fill.html).

#### Fill example

```json
{
  "fill": {
    "color": "rgba(0,0,0,0.5)"
  }
}
```

### Stroke

A stroke style can be defined with the OpenLayers options for a [Stroke](https://openlayers.org/en/latest/apidoc/ol.style.Stroke.html).

#### Stroke example

```json
{
  "stroke": {
    "color": "rgba(0,0,0,1.0)",
    "width": 2
  }
}
```

### Circle

A circle style can be defined with the OpenLayers options for a [Circle](https://openlayers.org/en/latest/apidoc/ol.style.Circle.html).

#### Circle example

```json
{
  "circle": {
    "radius": 16,
    "stroke": {
      "color": "rgba(0,0,0,1)",
      "width": 5
    },
    "fill": {
      "color": "rgba(255,255,255,0.9)"
    }
  }
}
```

### Icon

An icon style can be defined with the OpenLayers options for an [Icon](https://openlayers.org/en/latest/apidoc/ol.style.Icon.html). Size and src are required.

Icon rotation can be set with `"rotation"`, either by using a fixed value or by specifying an attribute holding rotation values. In the latter case, the attribute name should be enclosed in double curly braces. Rotation values should always be in degrees.

#### Icon example

```json
{
  "icon": {
    "size": [32,32],
    "src": "data/png/my_icon.png"
  }
}
```

### Text

A text style can be defined with the OpenLayers options for a [Text](https://openlayers.org/en/latest/apidoc/ol.style.Text.html). The fill option sets the font color and the stroke option is used to create halo effects.

Arbitrary text can be provided as text value. For cluster layers the reserved word "size" can be used to show number of features of the cluster.

#### Text example

```json
{
  "text": {
    "font": "Bold 12px Arial",
    "textAlign": "center",
    "offsetX": 10,
    "offsetY": -10,
    "text": "My label text",
    "fill": {
      "color": "rgba(0,0,0,1.0)"
    },
    "stroke": {
      "color": "rgba(255,255,255,0.7)",
      "width": 2
    }
  }
}
```

### Image

The image style is not used to style features. It is only used for legend purposes, for example to symbolize a raster layer in the legend. Only the src property is set.

#### Image

```json
{
  "image": {
    "src": "img/png/gra.png"
  }
}
```

### Legend graphics

Map server legend graphics (WMS only) can be used in the legend. Please note that this will not change the layer style.

#### Legend graphics

```json
{
  "icon": {
    "src": "URL for GetLegendGraphic request (or any other static image asset)"
   },
  "extendedLegend": true
}
```

### Label

The label shown for the style in the layermanager/legend when clicking the layer name. If omitted, none is shown.

#### Label

```json
{
  "label": "Label for the layer"
  }
}
```

### Alternative WMS style

Option to pick an alternative layer style for WMS layers. Requires alternative style to be published on map server.

#### Alternative WMS style

```json
{
  "icon": {
    "src": "..."
  },
  "wmsStyle": "Name of alternative WMS style"
}
```

## Style examples
To get started some common use cases are provided.

### Opacity
Colors are defined with rgba values. Opacity is set with the alpha channel, the a part of rgba. In this example the fill is semi-transparent.

#### Opacity

```json
{
  "styles": {
    "simple": [
      [
        {
          "stroke": {
            "color": "rgba(0,0,0,1.0)"
          },
          "fill": {
            "color": "rgba(0,0,0,0.5)"
          }
        }
      ]
    ]  
  }
}
```

### Combining styles
Different styles can be combined to create complex styles. In this example the features will be styled with two circle styles, one inner circle and one outer circle. The inner circle has the radius 4 and the outer circle the radius 16. Styles are combined by adding styles within the same brackets and are seperated by curly brackets.

#### Combining styles

```json
{
  "styles": {
    "doubleCircle": [
      [
        {
          "circle": {
            "radius": 16,
            "stroke": {
              "color": "rgba(0,0,0,1)",
              "width": 5
            },
            "fill": {
              "color": "rgba(255,255,255,0.9)"
            }
          }
        },
        {
          "circle": {
            "radius": 4,
            "stroke": {
              "color": "rgba(0,0,0,0)",
              "width": 1
            },
            "fill": {
              "color": "rgba(37,129,196,1)"
            }
          }
        }
      ]
    ]  
  }
}
```

### Thematic styling
By applying filters thematic styling can be made. In this example features with the attribute type equal to vegetation will be green and features with the attribute type equal to water will be blue. The style settings for each type are grouped by brackets. You are also able to add a label to each filter.

#### Thematic styling

```json
{
  "styles": {
    "thematic": [
      [
  		  {
    			"fill": {
    			  "color": "rgba(0,255,0,0.5)"
    			},
    			"stroke": {
    			  "color": "rgba(0,255,0,1)",
    			  "width": 2
    			},
    			"filter": "[type] == 'vegetation'",
    			"label": "Vegetation"
  		  }
  		],
  		[
  		  {
    			"fill": {
    			  "color": "rgba(0,0,255,0.5)"
    			},
    			"stroke": {
    			  "color": "rgba(0,0,255,1)",
    			  "width": 2
    			},
    			"filter": "[type] == 'water'",
    			"label": "Water"
  		  }
  		]    
    ]  
  }
}
```

### Center point
Geometry calculations can be used to style features. In this example the center point within a polygon is styled with an icon. This is done by adding a geometry property with the value "centerPoint" for the icon style.

#### Center point of polygon

```json
{
  "styles": {
    "center": [
      [
         {
           "stroke": {
             "color": "rgba(103,60,31,1.0)",
             "width": 1
           },
           "fill": {
             "color": "rgba(103,60,31,0.1)"
           }
         },
         {
           "icon": {
             "size": [
               23,
               36
             ],
             "src": "img/png/droppe.png"
           },
           "geometry": "centerPoint"
         }
       ]   
    ]  
  }
}
```

### Cluster style
When creating a style for a cluster layer it is usually desired to show the number of features in each cluster. This can be done be by using the reserved word "size" in which case the number of features will be used as text value. Other text properties are provided as usual.

#### Cluster style with size as text

```json
{
  "styles": {
    "cluster": [
      [
        {
          "circle": {
            "radius": 16,
            "fill": {
              "color": "rgba(103,60,31,0.5)"
            },
            "stroke": {
              "color": "rgba(103,60,31,0.9)",
              "width": 4
            }
          }
        },
        {
          "text": {
            "font": "Bold 12px Arial",
            "textAlign": "center",
            "text": "size",
            "fill": {
              "color": "rgba(255,255,255,1.0)"
            },
            "stroke": {
              "color": "rgba(103,60,31,0.9",
              "width": 2
            }
          }
        }
      ]
    ]    
  }
}
```

### Custom style function
For more advanced styling you can use a custom style function and for instance style features depending on multiple attribute values or use more complex filters and styling techniques.

#### Style function included in src/style/stylefunctions.js with a .png-icon for presentation in the legend.

```json
{
  "styles": {
    "basemap": [
      [
        {
          "custom": "basemapStyle",
          "icon": {
            "src": "img/png/basemap.png",
            "size": [20,20]
          }
        }
      ]
    ]    
  }
}
```
