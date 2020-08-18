import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteTask({
  handleDeleteTask, id,
}) {
  return (
    <button
      type="button"
      className="icon-button delete"
      onClick={handleDeleteTask(id)}
    >
      <FontAwesomeIcon icon={faTrashAlt} className="fas fa-pencil-alt icon" />
    </button>
  );
}

DeleteTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DeleteTask;
