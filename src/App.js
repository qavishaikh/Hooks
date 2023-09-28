import React, { useState, useMemo } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

// const sum = () => {
//   console.log("Calculating Sum...!");
//   return parseInt(number1) + parseInt(number2);
// };

const sum = useMemo(() => {
  console.log("Calculating Sum...!");
  return parseInt(number1) + parseInt(number2);
},[number1,number2]);

  return (
    <div className='App'>
      <h1> Use Memo in React</h1>
    
    <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} />
    <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} />

    {/* <h4>Sum : {sum()}</h4> */}

    <h4>Sum : {sum}</h4>


    <h3>Count Number : {count}</h3>
    <button onClick={() => setCount(count + 1)}>Count ++</button>
    </div>
  );
}

export default App;
