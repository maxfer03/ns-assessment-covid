import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Box,
  FormControl,
  Input,
  InputLabel,
  Container,
  Button,
} from "@material-ui/core";
import { logInUser, registerUser } from "../redux/actions";

export const LogIn = ({ mode }) => {
  const dispatch = useDispatch();
  const userInitialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInitialState);


  
  
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
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
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>{mode === "login" ? "Log In" : "Register"}</Box>
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
      <Button onClick={() => handleSubmit()}>
        {mode === "login" ? "Log In" : "Register"}
      </Button>
      {/* <TextField id="standard-basic" label="Username" type="text" required = 'true' />
        <TextField id="standard-basic" label="Password" type="password" required = 'true'/>
        <Input type = "submit"/> */}
    </Box>
  );
};
