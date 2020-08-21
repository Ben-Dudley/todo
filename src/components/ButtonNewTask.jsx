import React from 'react';
import PropTypes from 'prop-types';
import styles from './BottomButton.module.css';

function ButtonNewTask({ items, add }) {
  const addTask = () => {
    const ind = (items.length > 0 ? items[items.length - 1].id : '');
    const index = Number(ind === '' ? 0 : ind.slice(5)) + 1;
    add(`task_${index}`, 'New item', false);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={addTask}
    >
      New task
    </button>
  );
}

ButtonNewTask.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
  add: PropTypes.func.isRequired,
};

ButtonNewTask.defaultProps = {
  items: [],
};

export default ButtonNewTask;
