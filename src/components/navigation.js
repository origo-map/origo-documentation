import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './navigation_item';
import { backLink } from '../../custom';

/**
 * Extracts all section names at depth 3 under the specified heading index.
 */
function getAllInSection(headings, idx) {
  const activeHeadings = [];
  for (let i = idx + 1; i < headings.length; i++) {
    if (headings[i].depth === 3) {
      activeHeadings.push(headings[i].children[0].value);
    } else if (headings[i].depth === 2) {
      break;
    }
  }
  return activeHeadings;
}

/**
 * Extracts all section names from a child at depth 3 to its parent at depth 2.
 */
function getAllInSectionFromChild(headings, idx) {
  for (let i = idx; i > 0; i--) {
    if (headings[i].depth === 2) {
      return getAllInSection(headings, i);
    }
  }
  return [];
}

/**
 * Navigation Component
 * Renders a list of navigation items based on the AST structure.
 */
const Navigation = ({ ast, activeSection, navigationItemClicked }) => {
  const headings = ast.children.filter((child) => child.type === 'heading');
  let activeHeadings = [];

  // Determine active headings
  if (activeSection) {
    const activeHeadingIdx = headings.findIndex(
      (heading) => heading.children[0].value === activeSection
    );
    const activeHeading = headings[activeHeadingIdx];

    if (activeHeading) {
      if (activeHeading.depth === 3) {
        activeHeadings = [activeSection].concat(
          getAllInSectionFromChild(headings, activeHeadingIdx)
        );
      } else if (activeHeading.depth === 2) {
        activeHeadings = [activeSection].concat(
          getAllInSection(headings, activeHeadingIdx)
        );
      }
    }
  }

  const activeHeadingsMap = activeHeadings.reduce((memo, heading) => {
    memo[heading] = true;
    return memo;
  }, {});

  return (
    <div className="pad0x small">
      {headings.map((child, i) => {
        const sectionName = child.children[0].value;
        const active = sectionName === activeSection;

        if (child.depth === 1) {
          return (
            <div
              key={i}
              onClick={() => navigationItemClicked(sectionName)}
              className="small pad0x quiet space-top1"
            >
              {sectionName}
            </div>
          );
        } else if (child.depth === 2) {
          return (
            <NavigationItem
              key={i}
              href={`#${child.data.id}`}
              onClick={navigationItemClicked}
              active={active}
              sectionName={sectionName}
            />
          );
        } else if (child.depth === 3 && activeHeadingsMap[sectionName]) {
          return (
            <div key={i} className="space-left1">
              <NavigationItem
                href={`#${child.data.id}`}
                onClick={navigationItemClicked}
                active={active}
                sectionName={sectionName}
              />
            </div>
          );
        }

        return null;
      })}
      <a
        href="#origo-map"
        className="space-top2 pad1y dark keyline-top block small quiet"
      >
        {backLink}
      </a>
    </div>
  );
};

// PropTypes for the Navigation component
Navigation.propTypes = {
  ast: PropTypes.object.isRequired, // Abstract Syntax Tree (AST) of headings
  activeSection: PropTypes.string, // Currently active section
  navigationItemClicked: PropTypes.func.isRequired, // Callback for navigation item clicks
};

export default Navigation;
