import React, { useState } from 'react';
import './App.css';
import Children from './ChildrenComponent'

function App() {

  const [count, setCount] = useState(0);

  console.log("parent Component");

  return (
    <div className='App'>
      <h1> Memo in React</h1>
    <Children />
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}> Count+</button>
    </div>
  );
}

export default App;
