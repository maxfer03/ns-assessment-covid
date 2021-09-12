import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountriesTable } from "../components/CountriesTable";
import { fetchStats } from "../redux/actions";
import { getToken } from "../utils/functions";

export const Main = () => {
  const token = getToken()
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  useEffect(() => {
    if ((stats.length == 0)) {
      dispatch(fetchStats(token));
    }
  }, []);
  return <div>
      <CountriesTable/>
  </div>;
};
