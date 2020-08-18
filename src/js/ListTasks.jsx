import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.jsx';

function ListTasks({
  items, handleCheck, handleDeleteTask, handleEditText,
}) {
  return (
    <ol className="tasks">
      {items.map((item) => (
        <Task
          key={item.id}
          checked={item.checked}
          id={item.id}
          title={item.title}
          handleCheck={handleCheck}
          handleDeleteTask={handleDeleteTask}
          handleEditText={handleEditText}
        />
      ))}
    </ol>
  );
}

ListTasks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
  handleCheck: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleEditText: PropTypes.func.isRequired,
};

ListTasks.defaultProps = {
  items: 'New task',
};

export default ListTasks;
