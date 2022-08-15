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
    editable: true,
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
    field: "ChangeStatus",
    headerName: "",
    width: "120",
    textAlign: "Center",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();
        return changeStatus(params.id);
      };

      return params.row.Status === "Completed" ? (
        <Button disabled onClick={onClick}>
          Done
        </Button>
      ) : (
        <Button onClick={onClick}>Done</Button>
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

function changeStatus(order) {
  const payload = {
    order_id: order,
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

export { FetchOrders };
