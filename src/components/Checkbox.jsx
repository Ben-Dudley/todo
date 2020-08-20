import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  check, checked, id,
}) {
  return (
    <input
      type="checkbox"
      onChange={() => check(id)}
      checked={checked}
    />
  );
}

Checkbox.propTypes = {
  check: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
