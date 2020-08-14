import React from 'react'

function ButtonNewTask(props) {
    return (
        <button className="new-elem" onClick={props.add}>
            New task 
        </button>
    )
}

export default ButtonNewTask