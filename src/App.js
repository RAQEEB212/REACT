import { Profile } from "./components/user";

function Button(){
  return(
    <button>
      I'm a button
    </button>
  );
}

export default function Myapp(){
  return(

    <>
    <h1> Welcome to my App</h1>
    <Button/>
    <Profile/>
    </>
    
  )
}




