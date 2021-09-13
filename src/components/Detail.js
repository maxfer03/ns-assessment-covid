import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../redux/actions";
import { formatSentence, getToken } from "../utils/functions";
import { useHistory } from "react-router";

export const Detail = ({ countryUrl }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const info = useSelector((state) => state.detail);
  const formated = formatSentence(countryUrl)

  useEffect(() => {
    if (info.country === "") {
      dispatch(fetchDetail(getToken(), countryUrl));
    }
  }, []);
  console.log(formated)

  return (
    <Box display="flex" flexDirection="column" fontSize="1.2em">
      <Button
        variant="outlined"
        color="primary"
        
        onClick={(e) => history.push(`/app/${countryUrl}/edit`)}
      >
        Edit {formated}
      </Button>
      <Box
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
        marginTop={2}
      >
        <Box fontSize="2em">{formated}</Box>
        <Box>Location: {info.continent}</Box>
        <Box>Last official update: {info.day}</Box>
        <Box>Population: {info.population}</Box>
      </Box>
      <Box
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
      >
        <Box fontSize="1.5em">Cases</Box>
        <Box>Per million habitants: {info.cases["1M_pop"]}</Box>
        <Box>Active: {info.cases.active}</Box>
        <Box>Critical: {info.cases.critical}</Box>
        <Box>New: {info.cases.new}</Box>
        <Box>Recovered: {info.cases.recovered}</Box>
        <Box>Total: {info.cases.total}</Box>
      </Box>
      <Box
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
      >
        <Box fontSize="1.5em">Deaths</Box>
        <Box>Per million habitants: {info.deaths["1M_pop"]}</Box>
        <Box>New: {info.deaths.new}</Box>
        <Box>Total: {info.deaths.total}</Box>
      </Box>
      <Box
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
      >
        <Box fontSize="1.5em">Tests</Box>
        <Box>Per million habitants: {info.tests["1M_pop"]}</Box>
        <Box>Total: {info.tests.total}</Box>
      </Box>
    </Box>
  );
};
