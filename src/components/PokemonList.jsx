import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokemonList = () => {
  const { pokemonData } = useContext(PokemonContext);

  return (
    <div>
      <h1>Pokemon List (Page 1)</h1>
      <ul>
        {pokemonData.slice(0, 10).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;