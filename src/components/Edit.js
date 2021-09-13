import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import axios from "axios";
import { APILINK } from "../utils/links";
import { getToken } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../redux/actions";
import { useHistory } from "react-router";

export const Edit = ({ countryUrl }) => {
  const history = useHistory();
  const token = getToken();
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
    <Box>
      edit {countryUrl}
      <Box>
        {" "}
        Cases
        <InputLabel htmlFor="casesactive">Active</InputLabel>
        <Input
          id="casesactive"
          onChange={(e) => handleEdit(e)}
          value={cases.casesactive}
        />
        <InputLabel htmlFor="casescritical">Critical</InputLabel>
        <Input
          id="casescritical"
          onChange={(e) => handleEdit(e)}
          value={cases.casescritical}
        />
        <InputLabel htmlFor="casesnew">New</InputLabel>
        <Input
          id="casesnew"
          onChange={(e) => handleEdit(e)}
          value={cases.casesnew}
        />
        <InputLabel htmlFor="casesrecovered">Recovered</InputLabel>
        <Input
          id="casesrecovered"
          onChange={(e) => handleEdit(e)}
          value={cases.casesrecovered}
        />
        <InputLabel htmlFor="cases1M_pop">Per 1 million</InputLabel>
        <Input
          id="cases1M_pop"
          onChange={(e) => handleEdit(e)}
          value={cases["cases1M_pop"]}
        />
        <InputLabel htmlFor="casestotal">Total</InputLabel>
        <Input
          id="casestotal"
          onChange={(e) => handleEdit(e)}
          value={cases.casestotal}
        />
      </Box>
      <Box>
        Deaths
        <InputLabel htmlFor="deathsnew">New</InputLabel>
        <Input
          id="deathsnew"
          onChange={(e) => handleEdit(e)}
          value={deaths.deathsnew}
        />
        <InputLabel htmlFor="deaths1M_pop">Per 1 million</InputLabel>
        <Input
          id="deaths1M_pop"
          onChange={(e) => handleEdit(e)}
          value={deaths["deaths1M_pop"]}
        />
        <InputLabel htmlFor="deathstotal">Total</InputLabel>
        <Input
          id="deathstotal"
          onChange={(e) => handleEdit(e)}
          value={deaths.deathstotal}
        />
      </Box>
      <Box>
        Tests
        <InputLabel htmlFor="tests1M_pop">Per 1 million</InputLabel>
        <Input
          id="tests1M_pop"
          onChange={(e) => handleEdit(e)}
          value={tests["tests1M_pop"]}
        />
        <InputLabel htmlFor="teststotal">Total</InputLabel>
        <Input
          id="teststotal"
          onChange={(e) => handleEdit(e)}
          value={tests.teststotal}
        />
      </Box>
      <Button onClick={() => handleCountryEdit()}>Update</Button>
    </Box>
  );
};
