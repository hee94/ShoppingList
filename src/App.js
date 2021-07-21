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
  render(){
    return(
      <main>
      <header> Shopping LIst</header>
      <InputBar />
      <List lists={this.state.shoppingList} />
      <button className="resetBtn">Reset</button>
      </main>
    )
  }
}

export default App;
