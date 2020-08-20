import React from 'react';
import PropTypes from 'prop-types';

function Title({
  title, editable, edit, id,
}) {
  if (editable) {
    return (
      <input
        className="todo-text"
        id={id}
        value={title}
        onChange={(event) => edit(event, id)}
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
  edit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Title;
