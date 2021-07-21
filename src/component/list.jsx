import React, { Component } from 'react';
import './list.css'
import Items from './items';

class List extends Component {
    render() {
        return (
            <ul>
               {this.props.lists.map(item => <Items key={item.id} item={item}/>)}
            </ul>
        );
    }
}
export default List;