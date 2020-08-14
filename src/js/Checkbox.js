import React from 'react'

function Checkbox(props) {
    return (
        <input type="checkbox"
        onChange={props.handleCheck(props.id)}
        checked={props.checked}>
        </input>
        )
}

export default Checkbox