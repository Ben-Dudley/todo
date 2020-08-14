import React, {Component} from 'react'
import Checkbox from "./Checkbox"
import Title from "./Title"
import EditingTextTask from "./EditingTextTask"
import DeleteTask from "./DeleteTask"

class Task extends Component
{
    state = {
        editable: false
    }
    
    edit = (event) => {
        this.setState(prevState => ({editable : !prevState.editable}))
    }

    render(props)
    {
        return ( 
        <li>
            <Checkbox handleCheck={this.props.handleCheck}
            checked={this.props.checked} id={this.props.id}/>
            <Title title={this.props.title} editable={this.state.editable}
            handleEditText={this.props.handleEditText} id={this.props.id}/>
            <EditingTextTask edit={this.edit}/>
            <DeleteTask handleDeleteTask={this.props.handleDeleteTask}
            id={this.props.id}/>
        </li>
        );
    }
}

export default Task

