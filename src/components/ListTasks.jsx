import React from 'react';
import PropTypes from 'prop-types';
import Task from '../containers/Task.jsx';

function ListTasks({
  items, delTask, edit, checkTask,
}) {
  return (
    <ol className="tasks">
      {items.map((item) => (
        <Task
          items={items}
          key={item.id}
          checked={item.checked}
          id={item.id}
          title={item.title}
          checkTask={checkTask}
          delTask={delTask}
          edit={edit}
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
  checkTask: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

ListTasks.defaultProps = {
  items: 'New task',
};

export default ListTasks;
