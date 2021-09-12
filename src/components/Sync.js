import React from "react";
import { Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchStats, syncStats } from "../redux/actions";
import { getToken } from "../utils/functions";

export const Sync = () => {
  const dispatch = useDispatch();
  const syncDB = async (e) => {
    await dispatch(syncStats(getToken()));
  };
  return <Button onClick={(e) => syncDB()}>Sync</Button>;
};
