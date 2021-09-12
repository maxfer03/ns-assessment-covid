import React from "react";
import { LogIn } from "../components/LogIn";
import { Register } from "../components/Register";

export const Landing = () => {
  return(
    <div>
        <div>landing</div>
        <LogIn mode="login"/>
        <LogIn mode="register"/>
    </div>
    
  )
  
}
