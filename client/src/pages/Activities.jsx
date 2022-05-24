import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function getImages() {
      await fetch(`http://localhost:3001/images`)
        .then((response) => response.json())
        .then((actualData) => {
          if (isMounted) setImages(actualData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getImages();
    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    async function getVehicles() {
      await fetch(`http://localhost:3001/activities`)
        .then((response) => response.json())
        .then((actualData) => {
          if (isMounted) setActivities(actualData);
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
      {activities.map((item) => (
        <div
          key={item.title}
          className="ml-auto mr-auto flex flex-col align-middle justify-center bg-white dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl"
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
                image={images[1].link}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  className="dark:text-gray-200 flex"
                  variant="body2"
                  color="text.secondary"
                >
                  <pre style={{ whiteSpace: "pre-line" }}>{item.desc}</pre>
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
      ))}
    </div>
  );
};

export default Activities;
