import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({
  title, editable, edit, id,
}) {
  if (editable) {
    return (
      <input
        className={styles.title}
        id={id}
        value={title}
        onChange={(event) => edit(event, id)}
      />
    );
  }
  return (
    <span className={styles.title}>
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
