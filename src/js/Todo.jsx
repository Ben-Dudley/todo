import React, { Component } from 'react';
import ListTasks from './ListTasks.jsx';
import ButtonNewTask from './ButtonNewTask.jsx';
import ButtomDeleteList from './ButtonDeleteList.jsx';

const QUOTA_EXCEEDED_ERR = 'QUOTA_EXCEEDED_ERR';

class Todo extends Component {
  constructor() {
    super();
    const items = JSON.parse(localStorage.getItem('todo')) || [];

    for (let i = 0; i < items.length; i += 1) {
      items[i].id = `task_${i}`;
    }
    this.state = {
      items,
    };
  }

  setItem = () => {
    try {
      const { items } = this.state;
      localStorage.setItem('todo', JSON.stringify(items));
    } catch (error) {
      if (error.name === QUOTA_EXCEEDED_ERR) {
        console.log('Превышен лимит');
      }
    }
  }

  handleCheck = (id) => () => {
    const { items } = this.state;
    const index = items.findIndex((item) => item.id === id);
    const newItems = items;

    newItems[index].checked = !newItems[index].checked;
    this.setState({ items: newItems });
    this.setItem();
  }

  handleDeleteTask = (id) => () => {
    const { items } = this.state;
    const index = items.findIndex((item) => item.id === id);
    const newItem = items;

    newItem.splice(index, 1);
    this.setState({ items: newItem });
    this.setItem();
  }

  handleEditText = (id) => (event) => {
    const taskInput = event.target;
    const { items } = this.state;
    const index = items.findIndex((item) => item.id === id);
    const newItem = items;

    newItem[index].title = taskInput.value;
    this.setState({ items: newItem });
    this.setItem();
  }

  add = () => {
    const { items } = this.state;
    const newItems = items;

    newItems.push({
      id: (`task_${items.length}`),
      title: 'New item',
      checked: false,
    });
    this.setState({ items: newItems });
    this.setItem();
  }

  del = () => {
    const { items } = this.state;
    const newItems = items;
    newItems.splice(0, items.length);
    this.setState({ items: newItems });
    this.setItem();
  }

  render() {
    const { items } = this.state;
    return (
      <div className="to-do">
        <header>To-do list</header>
        <ListTasks
          items={items}
          handleCheck={this.handleCheck}
          handleDeleteTask={this.handleDeleteTask}
          handleEditText={this.handleEditText}
        />
        <div className="buttons">
          <ButtonNewTask add={this.add} />
          <ButtomDeleteList del={this.del} />
        </div>
      </div>
    );
  }
}

export default Todo;
