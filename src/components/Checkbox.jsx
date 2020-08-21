import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

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
      className={styles.checkbox}
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
