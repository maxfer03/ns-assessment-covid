import React, { useState } from "react";
import { Box, Container, Button } from "@material-ui/core";
import { LogIn } from "../components/LogIn";
import { Register } from "../components/Register";

export const Landing = () => {
  return(
    <Box display= "flex" flexDirection="column" alignItems="center">
        <div>landing</div>
        <Box>
          <LogIn/>
        </Box>

    </Box>
    
  )
  
}
