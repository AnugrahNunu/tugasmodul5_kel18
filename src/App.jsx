import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonListPage2 from './components/PokemonListPage2';
import PokemonContextProvider from './context/PokemonContext';

function App() {
  return (
    <div className="App">
      <h1>Pokemon App</h1>
      <Router>
        <Link to="/">Page 1</Link>{' '}
        <Link to="/page2">Page 2</Link>
        <PokemonContextProvider>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/page2" element={<PokemonListPage2 />} />
          </Routes>
        </PokemonContextProvider>
      </Router>
    </div>
  );
}

export default App;
