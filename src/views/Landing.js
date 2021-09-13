import React, { useState } from "react";
import { Box, Container, Button } from "@material-ui/core";
import { LogIn } from "../components/LogIn";
import { Register } from "../components/Register";

export const Landing = () => {
  return (
    <Box
      position="absolute"
      display="flex"
      top="0"
      left="0"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
    >
      <LogIn />
    </Box>
  );
};
