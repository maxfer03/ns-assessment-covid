import React, { useEffect, useState } from "react";
import { Box, Input, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/actions";
import { getToken } from "../utils/functions";
import { useHistory } from "react-router";

export const Detail = ({ countryUrl }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const info = useSelector((state) => state.detail);

  useEffect(() => {
    if (info.country === "") {
      dispatch(fetchDetail(getToken(), countryUrl));
    }
  }, []);

  const handleEdit = (e) => {
    console.log("pepe");
  };

  return (
    <Box display="flex" flexDirection="column">
      <Button onClick={(e) => history.push(`/app/${countryUrl}/edit`)}>
        Edit
      </Button>
      <Box border="1px solid black" marginBottom="20px">
        Info
        <Box>{countryUrl}</Box>
        <Box>{info.continent}</Box>
        <Box>{info.day}</Box>
        <Box>{info.population}</Box>
      </Box>
      <Box border="1px solid black" marginBottom="20px">
        Cases
        <Box>{info.cases["1M_pop"]}</Box>
        <Box>{info.cases.active}</Box>
        <Box>{info.cases.critical}</Box>
        <Box>{info.cases.new}</Box>
        <Box>{info.cases.recovered}</Box>
        <Box>{info.cases.total}</Box>
      </Box>
      <Box border="1px solid black" marginBottom="20px">
        Deaths
        <Box>{info.deaths["1M_pop"]}</Box>
        <Box>{info.deaths.new}</Box>
        <Box>{info.deaths.total}</Box>
      </Box>
      <Box border="1px solid black" marginBottom="20px">
        Tests
        <Box>{info.tests["1M_pop"]}</Box>
        <Box>{info.tests.total}</Box>
      </Box>
    </Box>
  );
};
