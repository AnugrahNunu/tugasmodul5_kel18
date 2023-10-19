import React, { useContext } from 'react';
import { DataContext } from './datacontext';

function Page2() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>Page 2</h1>
      {data.map((item) => (
        <div key={item.id}>
          {/* Display data here (modify this based on your data structure) */}
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default Page2;