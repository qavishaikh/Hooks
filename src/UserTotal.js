import react, {useEffect} from 'react';
import './App.css';

function User(props) {

  useEffect(() => {
    // alert("USe Effect")
    console.log("Called with props")
  }
  );
  useEffect(() => {
    // alert("USe Effect")
    console.log("Count is ", props.count)
  },[props.count,props.total]
  );
  return (
    <div className="App">
     <h1>UseEffect Hooks</h1>

     <h2>Count: {props.count}</h2>
     {/* <button onClick={() => setCount(count + 1)}>Update Count</button> */}

     <h2>Total: {props.total}</h2>
     {/* <button onClick={() => setTotal(total + 1)}>Update Total</button> */}

    </div>
  );
}

export default User;
