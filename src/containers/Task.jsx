import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../components/Checkbox.jsx';
import Title from '../components/Title.jsx';
import EditingTextTask from '../components/EditingTextTask.jsx';
import DeleteTask from '../components/DeleteTask.jsx';

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
      checked, id, title, check, delTask, edit, items,
    } = this.props;
    const { editable } = this.state;
    return (
      <li>
        <Checkbox
          check={check}
          checked={checked}
          id={id}
        />
        <Title
          title={title}
          editable={editable}
          edit={edit}
          id={id}
        />
        <EditingTextTask
          items={items}
          edit={this.edit}
        />
        <DeleteTask
          items={items}
          delTask={delTask}
          id={id}
        />
      </li>
    );
  }
}

Task.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  check: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default Task;
