import { useState, useEffect } from "react";

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
