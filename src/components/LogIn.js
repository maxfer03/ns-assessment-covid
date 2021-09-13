import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shadows from "@material-ui/core/styles/shadows";
import {
  TextField,
  Box,
  FormControl,
  Input,
  InputLabel,
  Container,
  Button,
} from "@material-ui/core";
import { Palette } from "@material-ui/core/styles/createPalette";
import { fetchStats, logInUser, registerUser } from "../redux/actions";
import { useHistory } from "react-router";

export const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push("/app");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      border={2}
      borderColor="primary.main"
      borderRadius="borderRadius"
      boxShadow={3}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <FormControl>
          <Box marginBottom={1}>
            <TextField
              id="username"
              value={user.username}
              onChange={(e) => handleChange(e)}
              label="Username"
              variant="outlined"
            />
          </Box>
        </FormControl>
        <FormControl>
          <TextField
            id="password"
            type="password"
            label="Password"
            value={user.password}
            onChange={(e) => handleChange(e)}
            variant="outlined"
          />
        </FormControl>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        padding={1}
        paddingTop={2}
        width="100%"
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleSubmit("login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleSubmit("register")}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};
