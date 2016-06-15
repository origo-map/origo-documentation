## Controls

A control is an optional module with a DOM element in a fixed position on the
screen. They can involve user input (buttons), or be informational only. The controls to be included in the maps are set in the map configuration.

#### Example setting controls to be included

```json
{
"controls": [
  {
    "name": "geoposition"
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

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`url` | url to the search endpoint
`searchAttribute` | the attribute that will be queried
`northing` | the attribute for northing coordinates. Only if geometryAttribute is not provided
`easting` | the attribute for easting coordinates. Only if geometryAttribute is not provided
`title` | title for the popup presenting the search result
`hint` | placeholder text for the search input
`geometryAttribute` | geometry attribute if northing and easting is not used

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
`-` | -

#### Example geoposition control

```json
{
  "name": "geoposition"
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

### Mapwindow control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`-` | -

#### Example mapwindow control

```json
{
  "name": "mapwindow"
}
```

### Editor control

Property | Description
---|---
`name` | the name of the control
`options` | options for the control

Option | Description
---|---
`editableLayers` | Layers that will we handled as editable layers. The name of the layer is used as identifier to get the settings for the layer as defined in layers.

#### Example editor control

```json
{
  "name": "editor",
  "options": {
      "editableLayers": ["roads", "buildings"]
  }
}
```
