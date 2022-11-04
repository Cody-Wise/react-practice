import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='square'>
        <p>Hello World</p>
        <p>Button has been clicked {count} times</p>
        <Button count={count} setCount={setCount} />
        <List />
      </div>
    </div>
  );
}

export default App;
