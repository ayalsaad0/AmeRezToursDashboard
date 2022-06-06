import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import FetchEmployees, { employeesGrid } from "../data/Employees";
import { Header } from "../components";

const Employees = () => {
  const employees = FetchEmployees();

  return (
    <div className="bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Employees" className="dark:text-white" />
      <DataGrid
        rows={employees}
        columns={employeesGrid}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 30,
        }}
        density="comfortable"
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};
export default Employees;
