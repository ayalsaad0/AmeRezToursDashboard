import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import EditVehicle from "../components/EditVehicle";
import Axios from "axios";

const Vehicles = () => {
  const [vehicles, setVehiles] = useState([]);
  const [openEditPage, setOpenEditPage] = useState(false);
  const [images, setImages] = useState([]);
  const [img, setImg] = useState();

  const handleClickOpenUpdate = () => {
    setOpenEditPage(true);
  };

  const handleCloseUpdate = () => {
    setOpenEditPage(false);
  };

  // function getImageById(id) {
  //  images.map((item) => {
  //     console.log(item.service_id)
  //     console.log(id)
  //     if(item.service_id === id) {
  //       setImg(item.link);
  //     }
  //   })
  // }

  // useEffect(() => {
  //   let isMounted = true;
  //   async function getImages() {
  //  await Axios.post(`http://localhost:3001/images`)
  //         .then((response) => {
  //           if (isMounted) setImages(response.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       }
  //       getImages();
  //       return () => (isMounted = false)

  // }, [])

  useEffect(() => {
    let isMounted = true;
    async function getVehicles() {
      await fetch(`http://localhost:3001/vehicles`)
        .then((response) => response.json())
        .then((actualData) => {
          if (isMounted) {
            console.log(actualData);
            setVehiles(actualData);
          }
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
        return (
          <div
            key={item.title}
            className="ml-auto mr-auto flex flex-col align-middle justify-center text-center min-w-fit bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"
          >
            <Dialog open={openEditPage} onClose={handleCloseUpdate}>
              <EditVehicle vehicle={item} />
            </Dialog>
            <Header
              category=""
              title={item.title}
              className="dark:text-white w-5/5"
            />
            <div>
              <Card
                className="dark:bg-secondary-dark-bg ml-auto mr-auto"
                sx={{
                  maxWidth: 345,
                  minWidth: 345,
                  borderRadius: "1.25rem",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.title}
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
                  <Button size="small" onClick={handleClickOpenUpdate}>
                    EDIT
                  </Button>
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
