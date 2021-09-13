import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/actions";
import { useHistory } from "react-router";
import { getToken } from "../utils/functions";
export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const found = useSelector((state) => state.foundCountry);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (found) {
      history.push(`/app/${input}`);
    }
  }, [found]);

  const handleSearch = () => {
    dispatch(fetchDetail(getToken(), input));
  };

  return (
    <Box display="flex" alignItems="center" margin={1} justifyContent ="center">
      <Box margin={1}>
      <FormControl>
        <TextField
          /* id="search" */
          value={input}
          onChange={(e) => handleInput(e)}
          label="Search a country"
          variant="outlined"
        />
      </FormControl>
      </Box>
      <Button
        
        height="100%"
        variant="outlined"
        color="primary"
        onClick={() => handleSearch()}
      >
        Search
      </Button>
    </Box>
  );
};
