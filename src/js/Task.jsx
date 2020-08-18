import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.jsx';
import Title from './Title.jsx';
import EditingTextTask from './EditingTextTask.jsx';
import DeleteTask from './DeleteTask.jsx';

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
      checked, id, title, handleCheck, handleDeleteTask, handleEditText,
    } = this.props;
    const { editable } = this.state;
    return (
      <li>
        <Checkbox
          handleCheck={handleCheck}
          checked={checked}
          id={id}
        />
        <Title
          title={title}
          editable={editable}
          handleEditText={handleEditText}
          id={id}
        />
        <EditingTextTask edit={this.edit} />
        <DeleteTask
          handleDeleteTask={handleDeleteTask}
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
  handleCheck: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
  handleEditText: PropTypes.func.isRequired,
};

export default Task;
