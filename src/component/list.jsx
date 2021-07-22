import React, { Component } from 'react';
import './list.css'
import Items from './items';

class List extends Component {
    handleDelete =(item)=>{
        this.props.handleDelete(item);
    }
    handleDecrease =(count)=>{
        this.props.handleDecrease(count);
    }
    handleIncrease=(count)=>{
        this.props.handleIncrease(count);
    }
    render() {
        return (
            <ul>
               {this.props.lists.map(item => <Items key={item.id} item={item}
                handleDelete={this.handleDelete} handleIncrease={this.handleIncrease}
                handleDecrease={this.handleDecrease}/>)}
            </ul>
        );
    }
}
export default List;