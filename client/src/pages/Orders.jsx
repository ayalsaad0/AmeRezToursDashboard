import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ordersGrid, FetchOrders } from "../data/Orders";
import { Header } from "../components";

const Orders = () => {
  const orders = FetchOrders();
  const ordersData = [];
  orders.map((order) => {
    let orderObj = {
      OrderID: order.id,
      CustomerNumber: order.phone_num,
      TotalAmount: order.order_price,
      OrderItems: order.item_title,
      Status: order.status,
      ProductImage: order.img_link,
      OrderDate: order.createdAt,
      EndDate: order.end_Date,
      StartDate: order.start_Date,
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
        initialState={{
          sorting: {
            sortModel: [{ field: "OrderDate", sort: "asc" }],
          },
          filter: {
            filterModel: {
              items: [
                {
                  columnField: "Status",
                  operatorValue: "equals",
                  value: "New",
                },
              ],
            },
          },
        }}
      />
    </div>
  );
};
export default Orders;
