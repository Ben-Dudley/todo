import React, {Component} from 'react'
import ListTasks from './ListTasks'
import ButtonNewTask from "./ButtonNewTask"
import ButtomDeleteList from "./ButtonDeleteList"

const QUOTA_EXCEEDED_ERR = 'QUOTA_EXCEEDED_ERR'

class Todo extends Component {

  constructor() {

    super();
    const items = JSON.parse(localStorage.getItem('todo')) || [];

    for (let i = 0; i < items.length; i++) {
      items[i].id = "task_" + i;
    }
    this.state = {
      items : items
    };
  }

  setItem = () => {
        try {
            localStorage.setItem('todo', JSON.stringify(this.state.items));
        } catch (error) {
            if (error.name === QUOTA_EXCEEDED_ERR) {
              alert('Превышен лимит');
            }
        }
    }

  handleCheck = (id) => (event) => {
    const index = this.state.items.findIndex(item => item.id === id)
    const newItems = this.state.items;

    newItems[index].checked= !newItems[index].checked;
    this.setState({items : newItems});
    this.setItem();
  }

  handleDeleteTask = (id) => (event) =>{
    const index = this.state.items.findIndex(item => item.id === id)
    let newItem = this.state.items;
    
    newItem.splice(index, 1);
    this.setState({items : newItem});
    this.setItem();
  }

  handleEditText = (id) => (event) => {
    const taskInput = event.target;
    const index = this.state.items.findIndex(item=>item.id === id);
    const newItem = this.state.items;
  
    newItem[index].title= taskInput.value;
    this.setState({items : newItem});
    this.setItem();
  }

  add = () => {
    const newItems = this.state.items;

    newItems.push({id : ("task_" + this.state.items.length), 
      title : "New item", checked : false});
    this.setState({items : newItems});
    this.setItem();
  } 

  delete = () => {
    const newItems = this.state.items;
    newItems.splice(0, this.state.items.length);
    this.setState({items : newItems});
    this.setItem();
  }

  render() {
   return (
   <div className="to-do">
        <header>To-do list</header>
        <ListTasks items={this.state.items} 
          handleCheck={this.handleCheck}
          handleDeleteTask={this.handleDeleteTask}
          handleEditText={this.handleEditText}/>
        <div className="buttons">
          <ButtonNewTask add={this.add}/>
           <ButtomDeleteList delete={this.delete}/>
        </div>
    </div>
    )
  }
}

export default Todo