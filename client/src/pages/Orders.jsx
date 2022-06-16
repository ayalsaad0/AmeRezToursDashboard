import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import FetchOrders, {
  ordersGrid,
  getCustomerNameById,
  getItemById,
} from "../data/Orders";
import { Header } from "../components";

const Orders = () => {
  const orders = FetchOrders();
  const ordersData = [];
  orders.map((item) => {
    var orderObj = {
      OrderID: item.order_id,
      CustomerName: getCustomerNameById(item.cust_id),
      TotalAmount: item.price,
      OrderItems: getItemById(item.service_id),
      Status: item.status,
      ProductImage: "toyota_tx",
    };
    ordersData.push(orderObj);
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
