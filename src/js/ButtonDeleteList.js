import React from 'react'

function ButtonDeleteList(props) {
    return (
        <button className="delete-list" onClick={props.delete}>
            Delete list
        </button>
    )
}

export default ButtonDeleteList