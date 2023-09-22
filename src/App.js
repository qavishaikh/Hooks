import react, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // alert("USe Effect")
    console.log("UseEffect")
    console.log("Updating", count);
  }
  );
  return (
    <div className="App">
     <h1>UseEffect Hooks</h1>

     <h2>Count: {count}</h2>
     <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
}

export default App;
