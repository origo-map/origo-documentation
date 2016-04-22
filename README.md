# Api documentation for Origo
Api documentation for the [Origo](https://github.com/origo-map/origo) web map framework.

## Writing documentation
Documentation is written as Markdown files in the `content` directory, and is organized by the `custom/content.js` file - that file requires each documentation page and puts them in order

## Development
Requirements:
* Node v4 or higher
* NPM
* Git

To run the site locally:  
1. Clone this repository:  
  `git clone https://github.com/origo-map/api-documentation.git`  
2. `npm install`  
3. `npm start`  
4. Open [http://localhost:9966/](http://localhost:9966/)

## Deployment
The npm run build command builds a bundle.js file that contains all the JavaScript code and content needed for deployment, and creates an index.html file that already contains the site content. Note that this replaces the existing index.html file, so it's best to run this only when deploying the site and to undo changes to index.html if you want to keep working on content.

To create bundle:  
`npm run build`

Note that the build script is adjusted for building in Windows. If building in non-Windows environment, the script should be changed to:  
`"build": "NODE_ENV=production browserify src/index.js | uglifyjs -c -m > bundle.js && npm run prerender -- index.html"`


## Notes
The api documentation is based on [Docbox](https://github.com/mapbox/docbox), an open source project from MapBox.
