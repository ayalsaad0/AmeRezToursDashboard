import { useState, useEffect } from "react";

export const employeesGrid = [
  {
    field: "id",
    headerText: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
  {
    field: "full_name",
    headerText: "Employee",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "email",
    headerText: "Email",
    width: "200",
    textAlign: "Center",
  },
  {
    field: "phone",
    headerText: "Phone",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "role",
    headerText: "Role",
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
