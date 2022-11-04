import React from 'react';

export default function Button({ text }) {
  function handleClick() {
    alert(`You Clicked Button ${text}`);
  }
  return <button onClick={handleClick}>Button {text}</button>;
}
