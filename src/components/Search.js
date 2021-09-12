import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Input, Button } from "@material-ui/core";
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
    <Box>
      <FormControl>
        <InputLabel htmlFor="username">Search a country</InputLabel>
        <Input
          /* id="search" */
          value={input}
          onChange={(e) => handleInput(e)}
        />
      </FormControl>
      <Button onClick={() => handleSearch()}>Search</Button>
    </Box>
  );
};
