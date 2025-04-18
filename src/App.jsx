import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  function inCount() {
    if (count <= 99) {
      setCount((count) => count + 1);
    }
  }
  function deCount() {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }

  return (
    <>
      <div className="App">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        {count > 99 && <p>You've reached the limit</p>}
        <button onClick={inCount}>Increment</button>
        <button onClick={deCount}>Decrement</button>
      </div>
    </>
  );
}

export default App;
