import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { ordersGrid, FetchOrdersData } from "../data/Orders";
import { Header } from "../components";

const Orders = () => {
  const ordersData = FetchOrdersData();
  console.log(ordersData);

  const [pageSize, setPageSize] = React.useState(10);
  return (
    <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" className="dark:text-white" />
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
        columns={ordersGrid}
        rows={ordersData}
        autoHeight
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 30,
        }}
        density="comfortable"
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.OrderID}
      />
    </div>
  );
};
export default Orders;
