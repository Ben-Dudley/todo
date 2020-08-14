import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteTask(props) {
    return (
        <button className="icon-button delete"
        onClick={props.handleDeleteTask(props.id)} >
        <FontAwesomeIcon icon={faTrashAlt} className="fas fa-pencil-alt icon"/>
    </button>
    )
}

export default DeleteTask