import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../containers/Task.module.css';

function ButtonEdit({ edit }) {
  return (
    <button
      type="button"
      className={styles.iconButton}
      onClick={edit}
    >
      <FontAwesomeIcon icon={faPencilAlt} className="fas fa-pencil-alt icon" />
    </button>
  );
}

ButtonEdit.propTypes = {
  edit: PropTypes.func.isRequired,
};

export default ButtonEdit;
