import React from 'react';
import PropTypes from 'prop-types';

function Title({
  title, editable, handleEditText, id,
}) {
  if (editable) {
    return (
      <input
        className="todo-text"
        id={id}
        value={title}
        onChange={handleEditText(id)}
      />
    );
  }
  return (
    <span className="todo-text">
      {title}
    </span>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  editable: PropTypes.bool.isRequired,
  handleEditText: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Title;
