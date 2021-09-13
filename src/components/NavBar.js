import React from "react";
import { Box } from "@material-ui/core";
import { Sync } from "./Sync";

export const NavBar = () => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      bgcolor = "primary.main"
      boxShadow ={1}
    >
      <Sync />
    </Box>
  );
};
