import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataList() {
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
    <div>
      {/* Display the fetched data here */}
    </div>
  );
}

export default DataList;