import React, { useState, useEffect } from 'react';
import { Form } from './components/Form/Form';
import { Recipe } from './components/Recipe/Recipe';
import { APP_ID, APP_KEY } from './keys';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getSearch = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setSearch(data.hits);
    } catch (err) {
      console.error(err);
    }
  };
  const getQuery = e => {
    setQuery(value);
  };

  return (
    <div className="App">
      <Form value={value} onChange={setValue} onClick={getQuery} />
      <div className="recipes">
        <Recipe recipes={search} />
      </div>
    </div>
  );
}

export default App;
