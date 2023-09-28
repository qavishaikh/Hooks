import React, { useRef } from "react";
import "./App.css";

function App() {
  // Example 1
  const inputRef = useRef(null);
  console.log("Rendring")

  // Example 2
  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    inputRef.current.style.background='pink';
    inputRef.current.style.colour = 'black';
    alert(`Input Value: ${inputValue}`);
    console.log(`Input Value: ${inputValue}`);
  };

  return (
    <div className="App">
      <h1>useRef In React.</h1>

      {/* Example 1 */}
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}
export default App;