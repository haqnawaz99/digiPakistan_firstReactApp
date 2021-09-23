import Counter from "./Counter";
import { useState } from "react";
import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  const hideCounter = () => {
    setShowCounter(false);
  };
  return (
    <div className="App">
      <p>Counter</p>
      <button onClick={() => setShowCounter(true)}>Show Counter</button>
      {showCounter && <Counter hideCounter={hideCounter} />}
    </div>
  );
}
export default App;
