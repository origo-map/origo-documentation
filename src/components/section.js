import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import remarkHTML from 'remark-html';
import remarkHighlight from '../highlight';
import { postHighlight } from '../../custom';

/**
 * Converts Markdown AST nodes to HTML with syntax highlighting applied.
 */
function renderHighlighted(nodes) {
  const processedMarkdown = remark()
    .use(remarkHighlight)
    .runSync({ type: 'root', children: nodes }); // Use runSync for synchronous processing
  const html = remark().use(remarkHTML).stringify(processedMarkdown);

  return {
    __html: postHighlight(html), // Apply post-processing if needed
  };
}

/**
 * Section Component
 * Renders a section with left and right content areas.
 */
const Section = ({ chunk, leftClassname, rightClassname }) => {
  const { left, right, preview, title } = chunk;

  return (
    <div
      data-title={title}
      className={`keyline-top section contain clearfix ${preview ? 'preview' : ''}`}
    >
      {/* Left content */}
      <div
        className={leftClassname}
        dangerouslySetInnerHTML={renderHighlighted(left)}
      />

      {/* Right content (if any) */}
      {right.length > 0 && (
        <div
          className={rightClassname}
          dangerouslySetInnerHTML={renderHighlighted(right)}
        />
      )}
    </div>
  );
};

// Define prop types for the Section component
Section.propTypes = {
  chunk: PropTypes.shape({
    left: PropTypes.array.isRequired, // Left content nodes
    right: PropTypes.array.isRequired, // Right content nodes
    preview: PropTypes.bool, // Preview mode
    title: PropTypes.string.isRequired, // Section title
  }).isRequired,
  leftClassname: PropTypes.string.isRequired, // CSS class for the left content
  rightClassname: PropTypes.string.isRequired, // CSS class for the right content
};

export default Section;
