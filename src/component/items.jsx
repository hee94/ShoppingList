import React, { Component } from 'react';
import { TiMinus,TiPlus  } from "react-icons/ti";
import './items.css'

class Items extends Component {
    render() {
        const {name, count} = this.props.item;
        return (
            <li>
                <span className="name">{name}</span>
                <button className="increaseBtn"><TiPlus /></button>
                <span className="count">{count}</span>
                <button className="decreaseBtn"><TiMinus /></button>
            </li>
        );
    }
}

export default Items;