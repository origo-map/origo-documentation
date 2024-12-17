import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import remark from 'remark';
import slug from 'remark-slug';
import content from '../custom/content';

// Process content using remark with the slug plugin
const ast = remark()
  .use(slug)
  .runSync(remark().parse(content)); // Use `runSync` for synchronous processing

// Get the root DOM element
const rootElement = document.getElementById('app');

// Ensure the root element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App ast={ast} content={content} />);
} else {
  console.error("The root element with ID 'app' was not found.");
}
