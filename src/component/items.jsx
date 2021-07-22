import React, { Component } from 'react';
import { TiMinus,TiPlus ,TiDelete  } from "react-icons/ti";
import './items.css'

class Items extends Component {
    onDelete =(e)=>{
        e.preventDefault();
        this.props.handleDelete(this.props.item.id)
    }
    render() {
        const {name, count} = this.props.item;
        return (
            <li>
                <span className="name">{name}</span>
                <button className="increaseBtn"><TiPlus /></button>
                <span className="count">{count}</span>
                <button className="decreaseBtn"><TiMinus /></button>
                <button className="deleteBtn" onClick={this.onDelete}> <TiDelete /></button>
            </li>
        );
    }
}

export default Items;