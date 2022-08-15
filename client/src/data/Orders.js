import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

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
    headerName: "Total Amount",
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
        return changeStatus(params.id, "Completed");
      };

      return params.row.Status !== "New" ? (
        <Button disabled onClick={onClick}>
          Complete
        </Button>
      ) : (
        <Button onClick={onClick}>Complete</Button>
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
        return changeStatus(params.id, "Canceled");
      };

      return params.row.Status !== "New" ? (
        <Button disabled onClick={onClick}>
          Cancel
        </Button>
      ) : (
        <Button onClick={onClick}>Cancel</Button>
      );
    },
  },
];

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
