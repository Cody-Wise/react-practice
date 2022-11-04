import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  function handleClick() {
    alert('Clicked');
  }
  return (
    <div className='App'>
      <div className='square'>
        <p>Hello World</p>
        <Button text='One' />
        <Button text='Two' />
        <Button text='Three' />
      </div>
    </div>
  );
}

export default App;
