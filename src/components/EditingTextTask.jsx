import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function EditingTextTask({ edit }) {
  return (
    <button
      type="button"
      className="icon-button write"
      onClick={edit}
    >
      <FontAwesomeIcon icon={faPencilAlt} className="fas fa-pencil-alt icon" />
    </button>
  );
}

EditingTextTask.propTypes = {
  edit: PropTypes.func.isRequired,
};

export default EditingTextTask;
