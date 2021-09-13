import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Box, FormControl, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { logInUser, registerUser } from "../redux/actions";
export const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInitialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(userInitialState);
  const auth = useSelector((state) => state.authorized);

  /*   useEffect(() => { */
  if (auth === true) {
    history.push("/app");
  }
  /*   }, [auth]); */

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
    if (auth === true) {
      history.push("/app");
    }
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
