// This file will use the controllers to handle the earnings data
import { useState, useEffect } from "react";

// A function which gets the total earnings in every month at the current year
function GetEarnings() {
  const [earnings, setEarnings] = useState([]);
  const data = [];
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/getEarnings`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          res.earnings.map((total) => data.push(total.total));
          if (isMounted) setEarnings(data);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return earnings;
}

export { GetEarnings };
