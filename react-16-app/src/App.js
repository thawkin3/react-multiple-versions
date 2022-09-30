import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count => count + 1);
  };

  const decrementCounter = () => {
    setCount(count => count - 1);
  };

  return (
    <div className="App-16">
      <h2>React 16 App</h2>
      <div className="CounterContainer">
        <button onClick={decrementCounter} aria-label="Decrement Counter">-</button>
        <span className="CounterValue">{count}</span>
        <button onClick={incrementCounter} aria-label="Increment Counter">+</button>
      </div>
    </div>
  );
}

export default App;
