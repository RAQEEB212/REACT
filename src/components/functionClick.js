import React from "react";
// import css from css;

function FunctionClick() {
  function eventHandler() {
    console.log("button is clicked");
  }
  return (
    <div>
      <button onClick={eventHandler}>click me </button>
    </div>
  );
}

export default FunctionClick;
