import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  a,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import axios from "axios";
import { APILINK } from "../utils/links";
import { formatSentence, getToken } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../redux/actions";
import { useHistory } from "react-router";

export const Edit = ({ countryUrl }) => {
  const history = useHistory();
  const token = getToken();
  const formated = formatSentence(countryUrl);
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);
  const previousInfo = useSelector((state) => state.detail);
  const [cases, setCases] = useState({
    casesactive: "",
    casescritical: "",
    casesnew: "",
    casesrecovered: "",
    cases1M_pop: "",
    casestotal: "",
  });
  const [deaths, setDeaths] = useState({
    deathsnew: "",
    deaths1M_pop: "",
    deathstotal: "",
  });
  const [tests, setTests] = useState({
    tests1M_pop: "",
    teststotal: "",
  });

  const handleEdit = (e) => {
    switch (e.target.id[0]) {
      case "c":
        setCases({
          ...cases,
          [e.target.id]: e.target.value,
        });
        break;
      case "d":
        setDeaths({
          ...deaths,
          [e.target.id]: e.target.value,
        });
        break;
      case "t":
        setTests({
          ...tests,
          [e.target.id]: e.target.value,
        });
        break;
    }
  };

  const handleCountryEdit = () => {
    let previousTotalCases = previousInfo.cases.total;
    let cleanCases = previousInfo.cases;
    let cleanDeaths = previousInfo.deaths;
    let cleanTests = previousInfo.tests;
    for (let key in cases) {
      console.log(cases[key]);
      if (cases[key].length > 0) {
        cleanCases[key.slice(5)] = cases[key];
      } else {
        continue;
      }
    }
    for (let key in deaths) {
      if (deaths[key].length > 0) {
        cleanDeaths[key.slice(6)] = deaths[key];
      } else {
        continue;
      }
    }
    for (let key in tests) {
      if (tests[key].length > 0) {
        cleanTests[key.slice(5)] = tests[key];
      } else {
        continue;
      }
    }
    const newInfo = {
      cases: cleanCases,
      deaths: cleanDeaths,
      tests: cleanTests,
    };
    for (let key in newInfo) {
      for (let subkey in newInfo[key]) {
        if (newInfo[key][subkey] === "Unknown / None") {
          newInfo[key][subkey] = null;
        }
      }
    }

    let remainder = newInfo.cases.total - previousTotalCases;
    let global = stats.find((e) => e.country === "all");
    console.log(global.cases.total);
    global.cases.total += remainder;
    console.log(global.cases.total);
    let globalCases = {
      cases: global.cases,
    };
    axios
      .post(`${APILINK}/stats/edit/${countryUrl}`, newInfo, {
        headers: {
          "X-JWT-Token": token,
        },
      })
      .then((res) => {
        axios
          .post(`${APILINK}/stats/edit/all`, globalCases, {
            headers: {
              "X-JWT-Token": token,
            },
          })
          .then((res) => {
            dispatch(fetchStats(token));
            alert("updated");
            history.push("/app");
          });
      });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontSize="1.5em"
    >
      <Box fontSize="1.5em">Edit {formated}</Box>
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
      >
        {" "}
        Cases
        <TextField
          label="Active"
          id="casesactive"
          onChange={(e) => handleEdit(e)}
          value={cases.casesactive}
        />
        <TextField
          label="Critical"
          id="casescritical"
          onChange={(e) => handleEdit(e)}
          value={cases.casescritical}
        />
        <TextField
          label="New"
          id="casesnew"
          onChange={(e) => handleEdit(e)}
          value={cases.casesnew}
        />
        <TextField
          label="Recovered"
          id="casesrecovered"
          onChange={(e) => handleEdit(e)}
          value={cases.casesrecovered}
        />
        <TextField
          label="Per 1 million"
          id="cases1M_pop"
          onChange={(e) => handleEdit(e)}
          value={cases["cases1M_pop"]}
        />
        <TextField
          label="Total"
          id="casestotal"
          onChange={(e) => handleEdit(e)}
          value={cases.casestotal}
        />
      </Box>
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={2}
      >
        Deaths
        <TextField
          label="New"
          id="deathsnew"
          onChange={(e) => handleEdit(e)}
          value={deaths.deathsnew}
        />
        <TextField
          label="Per 1 million"
          id="deaths1M_pop"
          onChange={(e) => handleEdit(e)}
          value={deaths["deaths1M_pop"]}
        />
        <TextField
          label="Total"
          id="deathstotal"
          onChange={(e) => handleEdit(e)}
          value={deaths.deathstotal}
        />
      </Box>
      <Box
        width="80%"
        display="flex"
        flexDirection="column"
        padding={2}
        border={2}
        borderColor="primary.main"
        borderRadius="borderRadius"
        boxShadow={2}
        marginBottom={10}
      >
        Tests
        <TextField
          label="Per 1 million"
          id="tests1M_pop"
          onChange={(e) => handleEdit(e)}
          value={tests["tests1M_pop"]}
        />
        <TextField
          label="Total"
          id="teststotal"
          onChange={(e) => handleEdit(e)}
          value={tests.teststotal}
        />
      </Box>
      <Box position ='fixed' top ='90%' bgcolor ='white'>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => handleCountryEdit()}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};
