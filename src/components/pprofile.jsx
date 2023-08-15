import { useState } from "react";

    export function Pprofile(){
        const [loggedIn,setloggedIn] = useState(false)
        const [logIn,setlogedIn] = useState(3)

       return(
        <>
        {loggedIn? <h1> welcome to RAQEEB</h1>:<h1> welcome  to SANEEL</h1>}
        {logIn==1?<h1>welcome user 1</h1>
        :logIn==2?<h1>welcome user 2</h1>
        :<h1>welcome user 3</h1>}
        </>
       )

       
        // if(loggedIn){
        //     return(
        //         <>
        //         <h1>welcome to RAQEEB</h1>
        //         </>
        //     )
        // }
        // else{
        //     return(
        //         <>
        //         <h1> welcome to SANEEL</h1>
        //         </>
        //     )
        // }
    }