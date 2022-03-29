import logo from './logo.svg';
import './App.css';
import CardGroups from './components/CardGroup/cardGroup';
import Card from './components/Card/Card';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <CardGroups></CardGroups>
      <Button>My button</Button>
    </div>
  );
}

export default App;
