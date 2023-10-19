import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokemonListPage2 = () => {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <div>
      <h1>Pokemon List (Page 2)</h1>
      <ul>
        {pokemonData.slice(10, 20).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonListPage2;