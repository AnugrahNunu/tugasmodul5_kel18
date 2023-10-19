import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemonData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (pokemonData.length === 0) {
      fetchData();
    }
  }, [pokemonData]);

  return (
    <PokemonContext.Provider value={{ pokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;