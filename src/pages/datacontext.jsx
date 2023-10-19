import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('pokeapi.co/api/v2/pokemon/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };