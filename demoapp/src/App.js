import logo from './logo.svg';
import './App.css';

function App() {
  function handleClick() {
    alert('Clicked');
  }
  return (
    <div className='App'>
      <div className='square'>
        <p>Hello World</p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  );
}

export default App;
