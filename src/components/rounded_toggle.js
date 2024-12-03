import React from 'react';
import PropTypes from 'prop-types';

/**
 * RoundedToggleOption Component
 * Represents a single toggle option.
 */
const RoundedToggleOption = ({ option, className, onClick }) => {
  const handleClick = () => {
    onClick(option); // Invoke the parent callback with the option value
  };

  return (
    <a onClick={handleClick} className={className}>
      {option}
    </a>
  );
};

RoundedToggleOption.propTypes = {
  option: PropTypes.string.isRequired, // The option text
  className: PropTypes.string.isRequired, // CSS class for styling
  onClick: PropTypes.func.isRequired, // Callback when clicked
};

/**
 * RoundedToggle Component
 * Renders a set of toggle options.
 */
const RoundedToggle = ({ options, active, onChange }) => {
  return (
    <div className="rounded-toggle inline short">
      {options.map((option) => (
        <RoundedToggleOption
          key={option}
          option={option}
          onClick={onChange}
          className={`strong ${option === active ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

RoundedToggle.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of toggle options
  active: PropTypes.string.isRequired, // The currently active option
  onChange: PropTypes.func.isRequired, // Callback for when an option is clicked
};

export default RoundedToggle;
