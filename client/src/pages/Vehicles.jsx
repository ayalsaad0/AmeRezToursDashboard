import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehiles] = useState([]);
  const [images, setImages] = useState([]);
  var images2 = [];

  useEffect(() => {
    let isMounted = true;
    async function getVehicles() {
      await fetch(`http://localhost:3001/vehicles`)
        .then((response) => response.json())
        .then((actualData) => {
          if (isMounted) setVehiles(actualData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getVehicles();
    return () => (isMounted = false);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {vehicles.map((item) => {
        Axios.post(`http://localhost:3001/images`, {
          vehicle_id: item.id,
        })
          .then((response) => {
            console.log(response.data);
            setImages(response.data);
            images2 = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
        return (
          <div
            key={item.title}
            className="ml-auto mr-auto flex flex-col align-middle justify-center text-center min-w-fit bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"
          >
            <Header
              category=""
              title={item.title}
              className="dark:text-white w-5/5"
            />
            <div>
              <Card
                className="dark:bg-secondary-dark-bg ml-auto mr-auto"
                sx={{ maxWidth: 345, minWidth: 345, borderRadius: "1.25rem" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={images2[0].link}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    className="dark:text-gray-200"
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.places} Places - {item.suitcases} Suitcases - Limited
                    Mileage -{" "}
                    {item.driver === 1 ? "Driver" : "Driver / Without Driver"} -
                    Wi-Fi - Air-Condition
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">EDIT</Button>
                  <Button color="error" size="small">
                    DELETE
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Vehicles;
