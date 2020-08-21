import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../containers/Task.module.css';

function ButtonDeleteTask({
  delTask, id,
}) {
  return (
    <button
      type="button"
      className={styles.iconButton}
      onClick={() => delTask(id)}
    >
      <FontAwesomeIcon icon={faTrashAlt} className="fas fa-pencil-alt icon" />
    </button>
  );
}

ButtonDeleteTask.propTypes = {
  delTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonDeleteTask;
