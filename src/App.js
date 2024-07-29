import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const Add = () => {
    setCounter((prev) => prev + 1);
  };
  const Sub = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="App">
      <button onClick={Add}>Add bg 1</button>
      <p> {counter} </p>
      <button onClick={Sub}>Subtract by 1</button>
    </div>
  );
}

export default App;
