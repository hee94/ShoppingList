import { Component } from 'react';
import './App.css';
import InputBar from './component/inputbar';
import List from './component/list';

class App extends Component{
  state={
    shoppingList :[
      {id:1 , name:'우유', count :1 },
      {id:2 , name:'계란', count :1 },
      {id:3 , name:'치즈', count :2 },
    ]
  }
  addList =(name)=>{
    const shoppingList = [...this.state.shoppingList, {id:Date.now(),name,count: 1}];
    this.setState({shoppingList})
  }
  handleDelete =(item)=>{
    const shoppingList = [...this.state.shoppingList.filter(list => list.id !== item)]
    this.setState({shoppingList})
  }
  handleDecrease =(item)=>{
    const shoppingList = this.state.shoppingList.map(list => {
      if(list.id === item.id ){
        const count = item.count -1
      return {...list, count: count <1 ? 1 : count}
    }
    return list;
    })
    console.log(shoppingList)
    this.setState({shoppingList})
  }
  onReset = ()=> {
    const shoppingList = this.state.shoppingList.map(list => {
      if(list.count !== 1){
        return {...list, count :1}
      }
      return list
    });
    this.setState({shoppingList})
  }
  render(){
    return(
      <main>
      <header> Shopping LIst</header>
      <InputBar addList={this.addList} />
      <List lists={this.state.shoppingList} handleDelete={this.handleDelete} 
      handleDecrease={this.handleDecrease} />
      <button className="resetBtn" onClick={this.onReset}>Reset</button>
      </main>
    )
  }
}

export default App;
