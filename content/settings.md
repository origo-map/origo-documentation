## Settings

General settings for the application

### featureinfoOptions

Property | Description
---|---
`clusterFeatureinfoLevel` | zoom level where cluster layers will be identifiable. Default is 1.
`overlay` | option to show featureinfo in overlay or sidebar. Default is true.
`pinning` | option to enable/disable pinning. If enabled a pin will be placed where clicked in areas with no identifiable features. Default is true.

#### Example featureinfoOptions

```json
{
  "featureinfoOptions": {
      "clusterFeatureinfoLevel": 3,
      "overlay": false,
      "pinning": false
  }
}
```
