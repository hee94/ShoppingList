import React, { Component } from 'react';
import './list.css'
import Items from './items';

class List extends Component {
    handleDelete =(item)=>{
        this.props.handleDelete(item);
    }
    render() {
        return (
            <ul>
               {this.props.lists.map(item => <Items key={item.id} item={item} handleDelete={this.handleDelete}/>)}
            </ul>
        );
    }
}
export default List;