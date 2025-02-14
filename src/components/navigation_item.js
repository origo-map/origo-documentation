import React from 'react';
import PropTypes from 'prop-types';

/**
 * NavigationItem Component
 * Renders a single navigation item with an onClick handler and active state styling.
 */
const NavigationItem = ({ sectionName, active, onClick, href }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default anchor navigation
    onClick(sectionName); // Invoke the callback with the section name
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`line-height15 pad0x pad00y quiet block ${active ? 'fill-lighten0 round' : ''}`}
    >
      {sectionName}
    </a>
  );
};

// Define prop types for the component
NavigationItem.propTypes = {
  sectionName: PropTypes.string.isRequired, // Name of the section
  active: PropTypes.bool.isRequired,       // Whether the item is active
  onClick: PropTypes.func.isRequired,      // Callback when clicked
  href: PropTypes.string.isRequired        // Link URL
};

export default NavigationItem;
