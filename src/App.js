import { Profile } from "./components/user";
import { ShoppingList } from "./components/list";
import { Pprofile } from "./components/pprofile";
import { useState } from "react";
import { renderingg } from "./components/rendering";
import FunctionClick from "./components/functionClick";
import ButtonCounts from "./components/buttonCounts";

function Button() {
  return <button>I'm a button</button>;
}

export default function Myapp() {

  const[loggedIn,setlogedIn] = useState(true)
  return (
    <>
      <h1> Welcome to my App</h1>
      <Button />
      <Profile />
      <ShoppingList />
      <Pprofile />
      {loggedIn && <Pprofile />}
      <renderingg / >
        <FunctionClick />
        <ButtonCounts/>
        <ButtonCounts/>
        
      
      
    </>
  );
}
