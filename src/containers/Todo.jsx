import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  add, del, edit, delTask, checkTask,
} from '../action/actionCreate';
import ListTasks from '../components/ListTasks.jsx';
import ButtonNewTask from '../components/ButtonNewTask.jsx';
import ButtomDeleteList from '../components/ButtonDeleteList.jsx';
import styles from './Todo.module.css';

function Todo({
  items, dispatchAdd, dispatchDel, dispatchDelTask, dispatchCheckTask, dispatchEdit,
}) {
  return (
    <div className={styles.todo}>
      <header className={styles.header}>To-do list</header>
      <ListTasks
        items={items}
        checkTask={dispatchCheckTask}
        delTask={dispatchDelTask}
        edit={dispatchEdit}
      />
      <div className={styles.buttons}>
        <ButtonNewTask add={dispatchAdd} items={items} />
        <ButtomDeleteList del={dispatchDel} items={items} />
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
  dispatchAdd: PropTypes.func.isRequired,
  dispatchDel: PropTypes.func.isRequired,
  dispatchDelTask: PropTypes.func.isRequired,
  dispatchEdit: PropTypes.func.isRequired,
  dispatchCheckTask: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  items: [],
};

export default connect((state) => ({
  items: state.items,
}), {
  dispatchAdd: add,
  dispatchDel: del,
  dispatchDelTask: delTask,
  dispatchEdit: edit,
  dispatchCheckTask: checkTask,
})(Todo);
