import React from 'react'
import Task from './Task'

function ListTasks(props) {
    return (
        <ol className="tasks">
            {props.items.map(item =>
                (<Task key={item.id} checked={item.checked}
                id={item.id}
                title={item.title} handleCheck={props.handleCheck}
                handleDeleteTask={props.handleDeleteTask}
                handleEditText={props.handleEditText}/>))}
        </ol>
    )
}

export default ListTasks