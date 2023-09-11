import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';


const textArr = [
                 "Click 1",
                 "Click 2",
                 "Click 3"];

function App() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button  onClick={incrementCount} text={textArr[0]}/>
     
      
    </div>
  );
}

export default App;
