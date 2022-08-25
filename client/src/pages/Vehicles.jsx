import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { DeleteVehicle } from "../data/Vehicles";
import { FetchVehicles } from "../data/Vehicles";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlinePlusCircle } from "react-icons/ai";
import VehicleForm from "../components/VehicleForm";

// This is the vehicles page
const Vehicles = () => {
  useEffect(() => {
    console.log("availability");
    fetch(`http://localhost:3001/unavailableVehicles`, {
      method: "POST",
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);
  const { currentColor, activePopup, setActivePopup } = useStateContext();
  const [currentVehicle, setCurrentVehicle] = useState([]);

  // Fetching all the vehicles
  const vehicles = FetchVehicles();

  // A function to handle the delete vehicle click
  const onClickDelete = (id) => {
    DeleteVehicle(id);
  };

  // A function to handle the add vehicle click
  const onClickAdd = () => {
    setActivePopup(true);
  };

  // A function to handle the edit vehicle click
  const onClickEdit = ({ item }) => {
    setCurrentVehicle(item);
    setActivePopup(true);
  };

  // A function to handle the form closing
  const onClose = () => {
    setCurrentVehicle([]);
    setActivePopup(false);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <button
        type="button"
        onClick={onClickAdd}
        style={{ background: currentColor, borderRadius: "50%" }}
        className="text-3xl fixed right-4 bottom-20 text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <AiOutlinePlusCircle />
      </button>
      <Dialog open={activePopup} onClose={onClose}>
        {activePopup && (
          <VehicleForm vehicle={currentVehicle} onClose={onClose} />
        )}
      </Dialog>
      {vehicles.map((item) => {
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
                sx={{
                  maxWidth: 345,
                  minWidth: 345,
                  borderRadius: "1.25rem",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.images[0].link}
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
                  <Button
                    size="small"
                    onClick={() => {
                      onClickEdit({ item });
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    color="error"
                    size="small"
                    onClick={() => {
                      onClickDelete(item.id);
                    }}
                  >
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
