import { useState, useEffect } from "react";

export const customersGrid = [
  { field: "first_name", headerName: "First name", width: 120 },
  { field: "last_name", headerName: "Last name", width: 120 },
  { field: "phone", headerName: "Phone", width: 120 },
  { field: "passport", headerName: "Passport / CIN", width: 120 },
  { field: "address", headerName: "Address", width: 160 },
  { field: "username", headerName: "Username", width: 120 },
  { field: "email", headerName: "Email", width: 200 },
];

export default function FetchCustomers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((response) => response.json())
      .then((actualData) => {
        setCustomers(actualData);
      })
      .catch();
  }, []);
  return customers;
}
