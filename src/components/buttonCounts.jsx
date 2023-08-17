import { useState } from "react";
import React from "react";

function ButtonCounts() {
  const [count, setCount] = useState(0);
  function clickCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={clickCount}>Clicked {count} times</button>
    </>
  );
}

export default ButtonCounts;
