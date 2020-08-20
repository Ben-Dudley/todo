import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
  checked, id, checkTask,
}) {
  const check = (event) => {
    const checkBox = event.target;
    checkBox.checked = !(checkBox.checked);
    checkTask(event, id);
  };

  return (
    <input
      type="checkbox"
      onChange={check}
      checked={checked}
    />
  );
}

Checkbox.propTypes = {
  checkTask: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Checkbox;
