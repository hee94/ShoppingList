import React, { Component } from 'react';
import { TiMinus,TiPlus ,TiDelete  } from "react-icons/ti";
import './items.css'

class Items extends Component {
    onDelete =(e)=>{
        e.preventDefault();
        this.props.handleDelete(this.props.item.id)
    }
    onDecrease=(e)=>{
        e.preventDefault();
        this.props.handleDecrease(this.props.item);
    }
    onIncrease=(e)=>{
        e.preventDefault();
        this.props.handleIncrease(this.props.item);
    }
    render() {
        const {name, count} = this.props.item;
        return (
            <li>
                <span className="name">{name}</span>
                <button className="increaseBtn" onClick={this.onIncrease}><TiPlus /></button>
                <span className="count">{count}</span>
                <button className="decreaseBtn" onClick={this.onDecrease}><TiMinus /></button>
                <button className="deleteBtn" onClick={this.onDelete}> <TiDelete /></button>
            </li>
        );
    }
}

export default Items;