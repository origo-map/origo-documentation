## Origo API

This is the API documentation for the Origo map framework. For more information about Origo and how to download please visit us on [GitHub](https://github.com/origo-map/origo). If you are a new user of Origo it is recommended to take a look at the basic examples that are included on GitHub.

An origo map can be created once its JavaScript and CSS file is included on a page. How the map is created is explained in [Creating the map](#creating-the-map). All available settings and options are described and examplified in this api documentation.

## Creating the map

The map is typically initialized with a json configuration as in the example to the right. As an alternative the json object can be included directly instead of a path to a json file. A third alternative is to initialize a map with an url to another origo map. The url is created with the share control. This is for example useful when you want to embed a map.

Property | Description
---|---
`options` | json path, json or an origo url

#### Example map with json

```javascript
<script type="text/javascript">
  origo.map.init('index.json');
</script>
```

#### Example map with origo url

```javascript
<script type="text/javascript">
  origo.map.init('http://www.malardalskartan.se/app/#layers=topowebbkartan_nedtonad/v/1/s/0,vasteras/v/1/s/0,samhalls_projekt/v/1/s/0&center=172605,6596280&zoom=2&pin=348078,6686310&map=malardalskartan');
</script>
```
