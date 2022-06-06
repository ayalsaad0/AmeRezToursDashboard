import { useState, useEffect } from "react";

export const employeesGrid = [
  {
    field: "id",
    headerName: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
  {
    field: "full_name",
    headerName: "Employee",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "email",
    headerName: "Email",
    width: "200",
    textAlign: "Center",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "role",
    headerName: "Role",
    width: "170",
    textAlign: "Center",
  },
];

export default function FetchEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/admins`)
      .then((response) => response.json())
      .then((actualData) => {
        setEmployees(actualData);
      })
      .catch();
  }, []);
  return employees;
}
