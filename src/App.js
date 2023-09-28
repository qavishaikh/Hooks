import React, { Component, createRef } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.myInputRef = createRef();
  }

  // Example 1
  // componentDidMount() {
  //   this.myInputRef.current.value = "Qavi Shaikh!";
  //   console.log(this.myInputRef.current.value);
  // }

  // Example 2
  handleClick = () => {
    this.myInputRef.current.focus();
    this.myInputRef.current.style.background = "yellow";
    this.myInputRef.current.style.color = "black";

    console.log(this.myInputRef.current.value);
  };

  render() {
    // console.log(this.myInputRef);
    return (
      <div className="App">
        <h1>Ref In React Class Component</h1>

        {/* Example 1 */}

        <input type="text" ref={this.myInputRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}
export default App;