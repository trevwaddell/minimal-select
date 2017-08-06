import React from 'react';
import PropTypes from 'prop-types';

// Select Component
const Select = ({ options, ...props }) => {
  const handleSelect = (event) => {
    props.onSelect(event.target.value);
  };

  const createDisplayText = option =>
    props.displayProp.reduce(
      (displayValue, prop) => (displayValue ? `${displayValue} ${option[prop]}` : option[prop]),
      '',
    );

  const optionElems = options.map(option =>
    (<option value={option[props.valueProp]} key={option[props.valueProp]}>
      {createDisplayText(option)}
    </option>),
  );

  return (
    <div className="select">
      <select onChange={handleSelect}>
        {optionElems}
      </select>
    </div>
  );
};

// Select Component Prop Types
Select.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  valueProp: PropTypes.string.isRequired,
  displayProp: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;