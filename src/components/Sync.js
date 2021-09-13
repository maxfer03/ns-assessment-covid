import React from "react";
import { Box, Button, ButtonGroup } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchStats, syncStats } from "../redux/actions";
import { getToken } from "../utils/functions";
import { useHistory } from "react-router";

export const Sync = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const syncDB = async (e) => {
    history.push(`/app`);
    await dispatch(syncStats(getToken()));
  };
  return (
    <ButtonGroup variant="text" aria-label="contained primary button group">
      <Button onClick={(e) => syncDB()}>Sync</Button>
      <Button onClick={() => history.push(`/app`)}>Home</Button>
    </ButtonGroup>
  );
};
