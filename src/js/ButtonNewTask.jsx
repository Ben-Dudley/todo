import React from 'react';
import PropTypes from 'prop-types';

function ButtonNewTask({ add }) {
  return (
    <button
      type="button"
      className="new-elem"
      onClick={add}
    >
      New task
    </button>
  );
}

ButtonNewTask.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ButtonNewTask;
