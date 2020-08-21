import React from 'react';
import PropTypes from 'prop-types';
import styles from './BottomButton.module.css';

function ButtonDeleteList({ del }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={del}
    >
      Delete list
    </button>
  );
}

ButtonDeleteList.propTypes = {
  del: PropTypes.func.isRequired,
};

export default ButtonDeleteList;
