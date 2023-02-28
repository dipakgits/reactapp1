import React from 'react';
import { useState, useEffect  } from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
      )
  },[])
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster:any)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilterMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (event:any) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // console.log('render');

  return(
    <div className='App'>
      <h1 className='app-title'>Dipak Balghare</h1>
      <SearchBox onChangeHandler={onSearchChange} 
      className='monsters-search-box' placeholder='search monster'/>
      <CardList monsters={filteredMonsters} />
    </div>
  )

}


// class App extends Component <any, any>{
//   constructor(props:any) {
//     super(props);
//     this.state = { 
//       monsters: [],
//       searchField: '',
//     };
//   }

//     componentDidMount(): void {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return{ monsters: users }
//           }
//         )
//       )
//     }

//     onSearchChange = (event:any)=>{
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(
//         () => {
//           return { searchField }
//         }
//       )
//     }

//     render(){
//       // console.log('renderApp');
//       const { monsters, searchField } = this.state;
//       const { onSearchChange } = this;

//       const filteredMonsters = monsters.filter((monster:any)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)
//       })
      
//       return(

//         <div className='App'>
//           <h1 className='app-title'>Deny Sim</h1>
//           <SearchBox onChangeHandler={onSearchChange} 
//           className='monsters-search-box' placeholder='search monster'/>
//           <CardList monsters={filteredMonsters} />

//         </div>
//       )
//     }
//   }


export default App;
