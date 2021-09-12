import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchDetail } from "../redux/actions";
import { getToken } from "../utils/functions";

export const CountriesTable = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const stats = useSelector(state => state.stats)
    stats.forEach(e => {
        e.id = e._id
        e.totalCases = e.cases.total
        e.totalTests = e.tests.total
        e.totalDeaths = e.deaths.total
    })
  const columns = [
    {
      field: "country",
      headerName: "Country",
      width: 200,
      
    },
    {
      field: "continent",
      headerName: "continent",
      width: 200,
      
    },
    {
      field: "totalCases",
      headerName: "Cases",
      type: "number",
      width: 200,
      
    },
    {
        field: "totalTests",
        headerName: "Tests",
        type: "number",
        width: 200,
        
    },
    {
        field: "totalDeaths",
        headerName: "Deaths",
        type: "number",
        width: 200,
        
    },
    {
        field: "day",
        headerName: "Last updated at",
        type: "string",
        width: 200,
        
    },
  ];

  const redirectToCountry = (e) => {
    dispatch(fetchDetail(getToken(), e.row.country))
    history.push(`/app/${e.row.country}`)
  }

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={stats}
        columns={columns}
        pageSize={8}
        onRowClick = {(e) => redirectToCountry(e)}
        /* checkboxSelection
        disableSelectionOnClick */
      />
    </div>
  );
};
