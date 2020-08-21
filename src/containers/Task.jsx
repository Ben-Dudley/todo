import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../components/Checkbox.jsx';
import Title from '../components/Title.jsx';
import ButtonEdit from '../components/ButtonEdit.jsx';
import ButtonDeleteTask from '../components/ButtonDeleteTask.jsx';
import styles from './Task.module.css';

class Task extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  edit = () => {
    this.setState((prevState) => ({ editable: !prevState.editable }));
  }

  render() {
    const {
      checked, id, title, delTask, edit, items, checkTask,
    } = this.props;
    const { editable } = this.state;
    return (
      <li className={styles.li}>
        <Checkbox
          checkTask={checkTask}
          checked={checked}
          id={id}
        />
        <Title
          title={title}
          editable={editable}
          edit={edit}
          id={id}
        />
        <ButtonEdit
          items={items}
          edit={this.edit}
        />
        <ButtonDeleteTask
          items={items}
          delTask={delTask}
          id={id}
        />
      </li>
    );
  }
}

Task.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checkTask: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

Task.defaultProps = {
  items: [],
};

export default Task;
