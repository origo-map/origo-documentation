import React from 'react';
import PropTypes from 'prop-types';
import Section from './section';
import GithubSlugger from 'github-slugger';
import { transformURL } from '../../custom';

// Initialize slugger
const slugger = new GithubSlugger();
const slug = (title) => {
  slugger.reset();
  return slugger.slug(title);
};

/**
 * Processes the AST to group nodes into chunks and split content into left and right sections.
 */
function chunkifyAST(ast, language) {
  let preview = false;

  return ast.children
    .reduce((chunks, node) => {
      if (node.type === 'heading' && node.depth === 1) {
        return chunks; // Skip top-level headings
      } else if (node.type === 'heading' && node.depth < 4) {
        chunks.push([node]); // Start a new chunk for headings < depth 4
      } else {
        chunks[chunks.length - 1].push(node); // Add to the current chunk
      }
      return chunks;
    }, [[]])
    .filter((chunk) => chunk.length) // Remove empty chunks
    .map((chunk) => {
      let left = [];
      let right = [];
      let title;

      if (language === 'cli') {
        language = 'bash';
      }

      if (chunk[0].depth < 3) {
        preview = false;
      }

      chunk.forEach((node) => {
        if (node.type === 'code') {
          if (['json', 'http', 'html'].includes(node.lang)) {
            right.push(node);
          } else if (node.lang === language) {
            right.push(language === 'curl' ? { ...node, lang: 'bash' } : node);
          } else if (node.lang === 'endpoint') {
            right.push(transformURL(node.value));
          } else if (node.lang === null) {
            left.push(node);
          }
        } else if (node.type === 'heading' && node.depth >= 4) {
          right.push(node);
        } else if (node.type === 'blockquote') {
          right.push(node);
        } else if (node.type === 'heading' && node.depth < 4 && !title) {
          title = node.children[0]?.value;
          left.push(node);
        } else if (node.type === 'html') {
          if (node.value.startsWith('<!--')) {
            const content = node.value.replace(/^<!--/, '').replace(/-->$/, '').trim();
            if (content === 'preview') {
              preview = true;
            }
          }
        } else {
          left.push(node);
        }
      });

      return { left, right, title, preview, slug: slug(title) };
    });
}

/**
 * Functional component for rendering content with left and right sections.
 */
const Content = ({ ast, language, leftClassname, rightClassname }) => {
  const chunks = chunkifyAST(ast, language);

  return (
    <div className="clearfix">
      {chunks.map((chunk, index) => (
        <Section
          leftClassname={leftClassname}
          rightClassname={rightClassname}
          chunk={chunk}
          key={index}
        />
      ))}
    </div>
  );
};

// Prop types for the component
Content.propTypes = {
  ast: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  leftClassname: PropTypes.string.isRequired,
  rightClassname: PropTypes.string.isRequired,
};

export default Content;
