import React from "react";
import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  function inCount() {
    setCount((count) => count + 1);
  }
  function deCount() {
    if (count === 0) {
      return;
    } else {
      // setCount(count - 1);
      setCount((count) => count - 1);
    }
  }
}
export default Counter;
