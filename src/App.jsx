import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  //value, setValue
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
      //FILTER NAMES
    const newFilterMonsters = monsters.filter(monster => {
        //but here we look for the search filter who was typed
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className='App'>
      <SearchBox
        onSearchChangeHandler={onSearchChange}
        placeholder='Search monster'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
