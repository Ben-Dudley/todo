import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'

function EditingTextTask(props) {
    return (
        <button className="icon-button write"
        onClick={props.edit} >
        <FontAwesomeIcon icon={faPencilAlt} className="fas fa-pencil-alt icon"/>
        </button>
    )
}

export default EditingTextTask