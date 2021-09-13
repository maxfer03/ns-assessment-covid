import React from "react";
import { Box } from "@material-ui/core";
import { Sync } from "./Sync";
import { LogOut } from "./LogOut";

export const NavBar = () => {
  return (
    <Box
      position="absolute"
      display = "flex"
      justifyContent ="space-between"
      top="0"
      left="0"
      width="100%"
      bgcolor = "primary.main"
      boxShadow ={1}
    >
      <Sync />
      <LogOut/>
    </Box>
  );
};
