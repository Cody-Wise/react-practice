import React from 'react';

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

export default function List() {
  return (
    <div>
      {animals.map((animal) => (
        <li>{animal}</li>
      ))}
    </div>
  );
}
