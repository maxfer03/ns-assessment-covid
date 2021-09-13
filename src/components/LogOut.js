import React from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
export const LogOut = () => {
  const history = useHistory();
  const logOut = () => {
    localStorage.setItem("token", null);
    history.push("/ ");
    window.location.reload();
  };
  return (
    <Button variant="text" onClick={() => logOut()}>
      Log out
    </Button>
  );
};
