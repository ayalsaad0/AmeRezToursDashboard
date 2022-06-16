import { useEffect, useState } from "react";
import Axios from "axios";
import toyota_tx from "../images/toyota-tx.jpg";
import toyota_fortuner from "../images/toyota-fortuner.png";
import ford_custom from "../images/ford-custom.png";
import marrakech_1 from "../images/marrakech-1.jpg";
import mercedes_class_e from "../images/mercedes-class-e.png";
import ourika_valley_1 from "../images/ourika-valley-1.jpeg";
import mercedes_vito from "../images/mercedes-vito.png";
import Avatar from "@mui/material/Avatar";

export const gridOrderImage = (props) => (
  <Avatar
    className="rounded-xl h-20 md:ml-3"
    src={props.ProductImage}
    alt="order-item"
  />
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const ordersGrid = [
  {
    field: "Image",
    headerName: "Image",
    textAlign: "Center",
    width: "120",
    renderCell: (params) => (
      <img src={params.row.ProductImage} alt={params.OrderItems} />
    ),
  },
  {
    field: "OrderItems",
    headerName: "Item",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerName: "Total Amount",
    format: "C2",
    textAlign: "Center",
    width: "150",
  },
  {
    field: "Status",
    headerName: "Status",
    template: gridOrderStatus,
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerName: "Order ID",
    width: "120",
    textAlign: "Center",
  },
];

export function FetchOrdersData() {
  const orders = FetchOrders();
  const ordersData = [];
  orders.map((item) => {
    const orderObj = {
      OrderID: item.order_id,
      CustomerName: getCustomerNameById(item.cust_id),
      TotalAmount: item.price,
      OrderItems: getItemById(item.service_id),
      Status: item.status,
      ProductImage: "toyota_tx",
    };
    ordersData.push(orderObj);
  });
  return ordersData;
}

export default function FetchOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/orders`)
      .then((response) => response.json())
      .then((actualData) => {
        if (isMounted) setOrders(actualData);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return orders;
}

function getCustomerNameById(id) {
  let name = "";
  Axios.post("http://localhost:3001/user-name-by-id", {
    id: id,
  }).then((response) => {
    name = response.data[0].first_name + " " + response.data[0].last_name;
  });
  // console.log(name);
  return name;
}

function getItemById(id) {
  var item = "";
  if (id[0] === "v") {
    Axios.post("http://localhost:3001/vehicle-by-id", {
      id: id,
    }).then((response) => {
      item = response.data;
    });
  } else {
    Axios.post("http://localhost:3001/activity-by-id", {
      id: id,
    }).then((response) => {
      item = response.data;
    });
  }
  // console.log(item);
  return item;
}
