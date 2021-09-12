import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Box,
  FormControl,
  Input,
  InputLabel,
  Container,
  Button,
} from "@material-ui/core";
import { fetchStats, logInUser, registerUser } from "../redux/actions";
import { useHistory } from "react-router";

export const LogIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const userInitialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInitialState);
  const auth = useSelector((state) => state.authorized);
  
  if (auth) {
    history.push("/app");
  }
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (mode) => {
    switch (mode) {
      case "login":
        dispatch(logInUser(user));
        break;
      case "register":
        dispatch(registerUser(user));
        break;
      default:
        console.log("undefined");
        break;
    }
    setUser(userInitialState);
    history.push("/app")
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>Enter</Box>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          value={user.username}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>
      <Box display="flex" justifyContent = "center">
      <Button onClick={() => handleSubmit("login")}>
        Login
      </Button>
      <Button onClick={() => handleSubmit("register")}>
        Register
      </Button>
      </Box>
    </Box>
  );
};
