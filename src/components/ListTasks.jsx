import React from 'react';
import PropTypes from 'prop-types';
import Task from '../containers/Task.jsx';

function ListTasks({
  items, delTask, edit, check,
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
          check={check}
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
  check: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

ListTasks.defaultProps = {
  items: 'New task',
};

export default ListTasks;
