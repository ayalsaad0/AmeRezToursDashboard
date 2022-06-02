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
import { DeleteVehicle } from "../data/Vehicles";
import { AddVehicleFunc } from "../data/Vehicles";
import AddVehicle from "../components/AddVehicle";
import Axios from "axios";
import FetchVehicles from "../data/Vehicles";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Vehicles = () => {
  const {
    currentColor,
    activeEditPopup,
    setActiveEditPopup,
    activeAddPopup,
    setActiveAddPopup,
  } = useStateContext();
  const [currentVehicle, setCurrentVehicle] = useState([]);
  const [images, setImages] = useState([]);
  const [img, setImg] = useState();
  const [id, setId] = useState("");

  const vehicles = FetchVehicles();
  const length = vehicles.length + 1;

  const addVehicle = () => {};

  const handleClick = (id) => {
    DeleteVehicle(id);
  };

  const handleClickOpenAdd = () => {
    setId("v_" + length);
    setActiveAddPopup(true);
  };

  const handleCloseAdd = () => {
    setActiveAddPopup(false);
  };

  const handleClickOpenUpdate = ({ item }) => {
    setCurrentVehicle(item);
    setActiveEditPopup(true);
  };

  const handleCloseUpdate = () => {
    setActiveEditPopup(false);
  };

  return (
    <div className="flex flex-wrap justify-center">
      <button
        type="button"
        onClick={handleClickOpenAdd}
        style={{ background: currentColor, borderRadius: "50%" }}
        className="text-3xl fixed right-4 bottom-20 text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <AiOutlinePlusCircle />
      </button>
      <Dialog open={activeEditPopup} onClose={handleCloseUpdate}>
        {activeEditPopup && <EditVehicle vehicle={currentVehicle} />}
      </Dialog>
      <Dialog open={activeAddPopup} onClose={handleCloseAdd}>
        {activeAddPopup && <AddVehicle vehicle_id={id} />}
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
                  <Button
                    size="small"
                    onClick={() => {
                      handleClickOpenUpdate({ item });
                    }}
                  >
                    EDIT
                  </Button>
                  <Button
                    color="error"
                    size="small"
                    onClick={() => {
                      handleClick(item.id);
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
