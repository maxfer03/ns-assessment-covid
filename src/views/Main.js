import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesTable } from "../components/CountriesTable";
import { fetchStats } from "../redux/actions";
import { getToken } from "../utils/functions";

export const Main = () => {
  const token = getToken();
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);
  const syncing = useSelector((state) => state.syncing);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (syncing) {
      setLoading(true);
    }
    if (!syncing) {
      setLoading(false);
      if (stats.length == 0) {
        dispatch(fetchStats(token));
      }
    }
    /* console.log("testing")
    switch (syncing) {
      case true:
        setLoading(true);
      case false:
        setLoading(false);
    } */
  }, [syncing]);
  return <div>{loading ? "Loading..." : <CountriesTable />}</div>;
};
