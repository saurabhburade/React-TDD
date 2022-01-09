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
      <h1 data-test="counter-diaplay">
        Count : <span data-test="counter">{counter}</span>
      </h1>
      <button onClick={handleIncrement} data-test="increment-button">
        Increment
      </button>
    </div>
  );
}

export default App;
