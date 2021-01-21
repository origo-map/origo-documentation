## Origo-map

This is the documentation for the Origo map framework. For more information about Origo and how to download please visit us on [GitHub](https://github.com/origo-map/origo). If you are a new user of Origo it is recommended to take a look at the basic examples that are included on GitHub.

An origo map can be created once its JavaScript and CSS file is included on a page. How the map is created is explained in [Creating the map](#creating-the-map). All available settings and options are described and examplified in this documentation.

## Creating the map

The map is typically initialized with a json configuration as in the example to the right. As an alternative the json object can be included directly instead of a path to a json file. A third alternative is to initialize a map with an url to another origo map. The url is created with the share control. This is for example useful when you want to embed a map. If the map-parameter is set in the url (eg http://origoMapUrl/#map=anotherconfig ), then the map configuration will be ignored and anotherconfig.json will be loaded.

Property | Description
---|---
`map configuration` | json path, json or an origo url with the map configuration
`options` | optional configuration that is set before the map configuration is read.

Option | Description
---|---
`crossDomain` | option to allow cross origin request of map configuration. Default is true.
`target` | element id of the container for the map. Default is '#app-wrapper'.
`baseUrl` | baseUrl for the root url that is used to request map resouces with relative paths. If not provided the baseUrl is set when the map is initialized.
`authorizationUrl` | an url that triggers authorization. It can for example be used to send a wms request that will trigger authorization before the map is loaded.
`svgSpritePath` | path for svg sprites. Default is 'css/svg/'.
`svgSprites` | list of svg sprites that should be requested.


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
  var origo = Origo('index.json', { target: '#the-map' });
</script>
```
