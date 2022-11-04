import React from 'react';

export default function List({ animals }) {
  return (
    <div>
      {animals.map((animal) => (
        <li>{animal}</li>
      ))}
    </div>
  );
}
