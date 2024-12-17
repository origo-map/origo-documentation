import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app';
import remark from 'remark';
import slug from 'remark-slug';
import content from '../custom/content';
import fs from 'fs';

// Process the Markdown content into an AST using remark
const ast = remark()
  .use(slug)
  .runSync(remark().parse(content)); // Use runSync for synchronous processing

// Load the HTML template
const template = fs.readFileSync('./index.html', 'utf8');

// Get the target output file from the command-line arguments
const target = process.argv[2];
if (!target) {
  console.error("Error: No target file specified. Provide the output file path as a command-line argument.");
  process.exit(1);
}

// Markers in the HTML template
const startDiv = `<div id='app'>`;
const stopDiv = `</div>`;
const startMarker = `<!--START-->${startDiv}`;
const stopMarker = `${stopDiv}<!--STOP-->`;

// Locate the insertion points for rendered React content
const startIdx = template.indexOf(startMarker) + startMarker.length;
const stopIdx = template.indexOf(stopMarker);

if (startIdx === -1 || stopIdx === -1) {
  console.error("Error: START or STOP markers not found in the template.");
  process.exit(1);
}

// Render the React component to a string
const renderedContent = ReactDOMServer.renderToString(<App ast={ast} content={content} />);

// Write the final HTML to the target file
const output = 
  template.substring(0, startIdx) +
  renderedContent +
  template.substring(stopIdx);

fs.writeFileSync(target, output, 'utf8');
console.log(`Rendered content written to ${target}`);
