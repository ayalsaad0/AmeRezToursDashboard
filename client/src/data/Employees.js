// This file will use the controllers to handle the employees data
import { useState, useEffect } from "react";

// The structure of the employees table
const employeesGrid = [
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

// A function which fetches all the employees from the database, and returns them as an array
function FetchEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/fetchAdmins`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          setEmployees(res.actualData);
        }
      })
      .catch();
  }, []);
  return employees;
}

export { FetchEmployees, employeesGrid };
