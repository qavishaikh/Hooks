import react, {useState, useEffect} from 'react';
import './App.css';
import User from './UserTotal'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    // alert("USe Effect")
    // console.log("After Count")
  },[count]
  );
  useEffect(() => {
    // alert("USe Effect")
    // console.log("After total")
  },[total]
  );
  return (
    <div className="App">
     <h1>UseEffect Hooks</h1>

      <User count={count} total={total}/>

     {/* <h2>Count: {count}</h2> */}
     <button onClick={() => setCount(count + 1)}>Update Count</button>

     {/* <h2>Total: {total}</h2> */}
     <button onClick={() => setTotal(total + 1)}>Update Total</button>

    </div>
  );
}

export default App;
