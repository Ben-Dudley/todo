import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  handleCheck, checked, id,
}) {
  return (
    <input
      type="checkbox"
      onChange={handleCheck(id)}
      checked={checked}
    />
  );
}

Checkbox.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
