import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useStateContext } from "../contexts/ContextProvider";
import FetchCustomers, { customersGrid } from "../data/Customers";
import { Header } from "../components";

const Customers = () => {
  const { currentMode } = useStateContext();
  const customers = FetchCustomers();

  return (
    <div className="bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl">
      <Header category="Page" title="Customers" className="dark:text-white" />
      <DataGrid
        rows={customers}
        columns={customersGrid}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        autoHeight
        style={{
          backgroundColor: currentMode === "Dark" ? "#33373E" : "#fff",
          color: currentMode === "Dark" ? "#fff" : "",
        }}
        density="comfortable"
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Customers;
