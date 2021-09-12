import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from "react-redux";

export const CountriesTable = () => {
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
      editable: true,
    },
    {
      field: "continent",
      headerName: "continent",
      width: 200,
      editable: true,
    },
    {
      field: "totalCases",
      headerName: "Cases",
      type: "number",
      width: 200,
      editable: true,
    },
    {
        field: "totalTests",
        headerName: "Tests",
        type: "number",
        width: 200,
        editable: true,
    },
    {
        field: "totalDeaths",
        headerName: "Deaths",
        type: "number",
        width: 200,
        editable: true,
    },
    {
        field: "day",
        headerName: "Last updated at",
        type: "string",
        width: 200,
        editable: true,
    },
  ];

/*   const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, test: 12356 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]; */

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={stats}
        columns={columns}
        pageSize={8}
        /* checkboxSelection
        disableSelectionOnClick */
      />
    </div>
  );
};
