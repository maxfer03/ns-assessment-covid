import React, { useState } from "react";
import {
  TextField,
  Box,
  FormControl,
  Input,
  InputLabel,
  Container,
  Button,
} from "@material-ui/core";

export const LogIn = () => {
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
    setUser(userInitialState)
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>Login</Box>
      <FormControl>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input id="username" value={user.username} onChange={(e) => handleChange(e)} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" type='password' value={user.password} onChange={(e) => handleChange(e)} />
      </FormControl>
      <Button onClick={() => handleSubmit()}>Log in</Button>
      {/* <TextField id="standard-basic" label="Username" type="text" required = 'true' />
        <TextField id="standard-basic" label="Password" type="password" required = 'true'/>
        <Input type = "submit"/> */}
    </Box>
  );
};
