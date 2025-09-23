## Origo-map

This is the documentation for the Origo map framework. For more information about Origo and how to download please visit us on [GitHub](https://github.com/origo-map/origo). If you are a new user of Origo it is recommended to take a look at the basic examples that are included on GitHub.

An origo map can be created once its JavaScript and CSS file is included on a page. How the map is created is explained in [Creating the map](#creating-the-map). All available settings and options are described and examplified in this documentation.

## Creating the map

The map is typically initialized with a json configuration as in the example to the right. As an alternative the json object can be included directly instead of a path to a json file. A third alternative is to initialize a map with an url to another origo map. The url is created with the share control. This is for example useful when you want to embed a map. If the map-parameter is set in the url (eg http://origoMapUrl/#map=anotherconfig ), then the map configuration will be ignored and anotherconfig.json will be loaded.

The configuration file must strictly follow the JSON standard (https://www.json.org/) with the addition of javascript style _one line comments_ and _block comments_.

The code for initiating Origo should always be inserted somewhere within the `<body>` tag and not within the `<head>` tag.

```javascript
// This is a comment to the end of this line.
{ name: 'scaleline' }, // It does not have to start at the beginning of a line
/* This is a comment until the end of comment marker.
   It can span several lines but not be nested */
```

Property | Description
---|---
`map configuration` | json path, json or an origo url with the map configuration
`options` | optional configuration that is set before the map configuration is read.

Option | Description
---|---
`authorizationUrl` | an url that triggers authorization. It can for example be used to send a wms request that will trigger authorization before the map is loaded.
`baseUrl` | baseUrl for the root url that is used to request map resouces with relative paths. If not provided the baseUrl is set when the map is initialized.
`breakPoints` | breakpoints determining what is shown at different screen sizes.
`breakPointsPrefix` | prefix to use when styling with breakpoints. Defaults to o-media.
`crossDomain` | option to allow cross origin request of map configuration. Default is true.
`defaultControls` | to override loading of default controls (scaleline, zoom, rotate, attribution and fullscreen).
`mapState` | mapState-object to override settings in the json-config.
`serviceWorker`| Object with options to install a service worker for e.g. creating an offline application. Currently only supported property is `url`, which is a relative path to a service worker js-file.
`svgSpritePath` | path for svg sprites. Default is 'css/svg/'.
`svgSprites` | list of svg sprites that should be requested.
`target` | element id of the container for the map. Default is '#app-wrapper'.


#### Example map with json

```javascript
<script type="text/javascript">
  var origo = Origo('index.json');
</script>
```


#### Example map with origo url

```javascript
<script type="text/javascript">
  var origo = Origo('http://www.malardalskartan.se/app/#layers=topowebbkartan_nedtonad/v/1/s/0,vasteras/v/1/s/0,samhalls_projekt/v/1/s/0&center=172605,6596280&zoom=2&pin=348078,6686310&map=malardalskartan');
</script>
```

#### Example map with options

```javascript
<script type="text/javascript">
  var origo = Origo('index.json', {
    target: '#the-map,
    breakPoints: {
      xs: [240, 320],
      s: [320, 320],
      m: [500, 500],
      l: [768, 500]
    },
    breakPointsPrefix: 'o-media',
    defaultControls: [
      { name: 'scaleline' },
      { name: 'zoom' },
      { name: 'rotate' },
      { name: 'attribution' },
      { name: 'fullscreen' }
    ],
    mapState: {
      "layers": [
        "osm/v/1/s/0/o/100",
        "origo-mask/v/1/s/0/o/25",
        "origo-cities/v/1/s/0/o/100"
      ],
      "center": "1810000,8390000",
      "zoom": "8.7",
      "legend": "expanded",
      "map": "index"
    }
  });
</script>
```

#### Example Creating an offline map
The example requires a service-worker file named _service-worker.js_. The
repository contains a boilerplate version for a simple offline application.
```javascript
<script type="text/javascript">
  var origo = Origo('index.json', { 
      serviceWorker: { 
        url: "service-worker.js"
    }
  });
</script>
```
