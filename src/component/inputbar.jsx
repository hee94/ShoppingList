import React, { Component } from 'react';
import './inputbar.css';

class InputBar extends Component {
    render() {
        return (
            <form>
                <input type="text" />
                <button className="addbtn">Add</button>
            </form>
        );
    }
}

export default InputBar;