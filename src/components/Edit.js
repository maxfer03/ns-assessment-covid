import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

export const Edit = ({ countryUrl }) => {
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
      <Button>Update</Button>
    </Box>
  );
};
