import React, { Component } from 'react';
import './inputbar.css';

class InputBar extends Component {
    inputRef = React.createRef();
    onAddsubmit =(e)=>{
        e.preventDefault();
        const name =this.inputRef.current.value;
        name && this.props.addList(name)
        this.inputRef.current.value= '';
    }
    render() {
        return (
            <form onSubmit={this.onAddsubmit}>
                <input ref={this.inputRef} type="text" />
                <button className="addbtn" type="submit">Add</button>
            </form>
        );
    }
}

export default InputBar;