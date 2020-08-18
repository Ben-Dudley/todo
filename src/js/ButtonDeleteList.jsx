import React from 'react';
import PropTypes from 'prop-types';

function ButtonDeleteList({ del }) {
  return (
    <button
      type="button"
      className="delete-list"
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
