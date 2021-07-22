import { Component } from 'react';
import './App.css';
import InputBar from './component/inputbar';
import List from './component/list';

class App extends Component{
  state={
    shoppingList :[
      {id:1 , name:'우유', count :0 },
      {id:2 , name:'계란', count :0 },
      {id:3 , name:'치즈', count :0 },
    ]
  }
  addList =(name)=>{
    const shoppingList = [...this.state.shoppingList, {id:Date.now(),name,count: 0}];
    this.setState({shoppingList})
  }
  handleDelete =(item)=>{
    const shoppingList = [...this.state.shoppingList.filter(list => list.id !== item)]
    this.setState({shoppingList})
  }
  render(){
    return(
      <main>
      <header> Shopping LIst</header>
      <InputBar addList={this.addList} />
      <List lists={this.state.shoppingList} handleDelete={this.handleDelete} />
      <button className="resetBtn">Reset</button>
      </main>
    )
  }
}

export default App;
