import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Count : {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
