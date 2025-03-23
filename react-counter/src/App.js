import React, { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Cleanup on unmount!");
    };
  }, []);

  useEffect(() => {
    console.log(`Count is updated to ${count}!`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div id="mainArea">
      <p><span>Count: {count}</span></p>
      <button id="mainButton" onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;