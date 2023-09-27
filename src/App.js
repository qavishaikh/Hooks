import React, { useState } from 'react';
import './App.css';
import Child from './Child';
import ChildB from './ChildB';

function App() {
  const [sharedState, setSharedState] = useState(""); // Corrected the usage of useState

  const handleChange = (newValue) => {
    console.log(newValue);
    setSharedState(newValue);
  };

  return (
    <div className='App'>
      <h1> Lifting State in React</h1>

      <Child sharedState={sharedState} handleChange={handleChange}/>

      <ChildB sharedState={sharedState} />
    </div>
  );
}

export default App;
