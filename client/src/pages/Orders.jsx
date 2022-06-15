import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import FetchOrders, {
  ordersGrid,
  ordersData,
  getCustomerNameById,
} from "../data/Orders";
import { Header } from "../components";

const Orders = () => {
  const orders = FetchOrders();
  console.log(orders);
  orders.map((item) => {
    const name = getCustomerNameById(item.cust_id);
    console.log(name);
  });

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
        rows={orders}
        autoHeight
        style={{
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 30,
        }}
        density="comfortable"
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row.order_id}
      />
    </div>
  );
};
export default Orders;
