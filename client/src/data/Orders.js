// This file will use the controllers to handle the orders data
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

// The structure of the orders table
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
    width: "300",
    textAlign: "Center",
  },
  {
    field: "CustomerNumber",
    headerName: "Customer's Phone",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "TotalAmount",
    headerName: "Total Price",
    format: "C2",
    textAlign: "Center",
    width: "150",
  },
  {
    field: "Status",
    headerName: "Status",
    textAlign: "Center",
    width: "120",
  },
  {
    field: "OrderID",
    headerName: "Order Number",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "OrderDate",
    headerName: "Order Date",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "StartDate",
    headerName: "Start Date",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "EndDate",
    headerName: "End Date",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "ApproveOrder",
    headerName: "",
    width: "120",
    textAlign: "Center",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();
        return changeStatus(params.id, "Approved");
      };

      return params.row.Status !== "Pending" ? (
        <Button disabled onClick={onClick}>
          Approve
        </Button>
      ) : (
        <Button onClick={onClick}>Approve</Button>
      );
    },
  },
  {
    field: "CancelOrder",
    headerName: "",
    width: "120",
    textAlign: "Center",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();
        console.log("first", params.row.OrderItems);
        if (params.row.OrderItems !== null)
          incrementQuantity(params.row.OrderItems);
        return changeStatus(params.id, "Cancelled");
      };

      return params.row.Status !== "Pending" ? (
        <Button disabled onClick={onClick}>
          Cancel
        </Button>
      ) : (
        <Button onClick={onClick}>Cancel</Button>
      );
    },
  },
];

// A function which fetches all the orders from the db and returns them as an array
function FetchOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/fetchOrders`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          setOrders(res.actualData);
        }
      })
      .catch();
  }, []);
  return orders;
}

// A function which changes the status of an order
function changeStatus(order, status) {
  const payload = {
    order_id: order,
    status: status,
  };
  fetch(`http://localhost:3001/changeOrderStatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
          alert(jsonRes.message);
        } else {
          alert(jsonRes.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// A function which increment the quantity of a vehicle that was in an order and has been returned to the company (order completed)
function incrementQuantity(vehicle) {
  const payload = {
    title: vehicle,
  };
  fetch(`http://localhost:3001/incrementQuantity`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
          alert(jsonRes.message);
        } else {
          alert(jsonRes.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// A function which gets the number of the current "pending" orders
function GetCountOfNewOrders() {
  const [count, setCount] = useState(0);
  fetch(`http://localhost:3001/getCountOfNewOrders`, {
    method: "POST",
  })
    .then(async (res) => {
      const jsonRes = await res.json();
      if (res.status === 200) {
        setCount(jsonRes.count[0].orders);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  return count;
}

export { FetchOrders, GetCountOfNewOrders };
