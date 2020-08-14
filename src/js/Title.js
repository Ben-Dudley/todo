import React, {Component} from 'react'

class Title extends Component {
    render() {
        if (this.props.editable) {
            return <input className='todo-text' id={this.props.id} value={this.props.title} 
            onChange={this.props.handleEditText(this.props.id)} autoFocus/>
        } else {
            return <span className="todo-text"> {this.props.title}</span>
        }
    }
}

export default Title