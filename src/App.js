import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters: [],
      searchfield: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  render() {
    const {monsters,searchfield }=this.state;
    const filteredMonsters=monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );


    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 

          placeholder='seacrh robots'
          handleChange={e =>this.setState({searchfield: e.target.value})}

        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}


export default App;
