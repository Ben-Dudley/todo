import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  add, del, edit, delTask, checkTask,
} from '../action/actionCreate';
import ListTasks from '../components/ListTasks.jsx';
import ButtonNewTask from '../components/ButtonNewTask.jsx';
import ButtomDeleteList from '../components/ButtonDeleteList.jsx';

function Todo({
  items, add, del, delTask, edit, checkTask,
}) {
  return (
    <div className="to-do">
      <header>To-do list</header>
      <ListTasks
        items={items}
        checkTask={checkTask}
        delTask={delTask}
        edit={edit}
      />
      <div className="buttons">
        <ButtonNewTask add={add} items={items} />
        <ButtomDeleteList del={del} items={items} />
      </div>
    </div>
  );
}

Todo.propTypes = {
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
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  items: 'New task',
};

export default connect((state) => ({
  items: state.items,
}), {
  add, del, delTask, edit, checkTask,
})(Todo);