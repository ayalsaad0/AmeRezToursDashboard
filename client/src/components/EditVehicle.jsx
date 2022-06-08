import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";
import VehiclesImageList from "./VehiclesImageList";

function EditVehicle({ vehicle }) {
  const [title, setTitle] = useState(vehicle.title);
  const [places, setPlaces] = useState(vehicle.places);
  const [suitcases, setSuitcases] = useState(vehicle.suitcases);
  const [price, setPrice] = useState(vehicle.price);

  const { setActivePopup } = useStateContext();

  const handleClick = async () => {
    await Axios.post("http://localhost:3001/update-vehicle", {
      title: title,
      places: places,
      suitcases: suitcases,
      price: price,
      id: vehicle.id,
    }).then((response) => {
      console.log(response);
    });
    setActivePopup(false);
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Box
      className="w-5/5 max-w-screen-lg mt-0 mb-0 ml-auto mr-auto flex flex-col p-4 justify-center shadow-md"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="m-4">
        <TextField
          id="filled-search"
          label={vehicle.title}
          type="search"
          variant="filled"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Number Of Passengers"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          placeholder={vehicle.places}
          onChange={(e) => setPlaces(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Number Of Suitcases"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          placeholder={vehicle.suitcases}
          onChange={(e) => setSuitcases(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          placeholder={vehicle.price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="m-4">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Available"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Driver"
        />
      </div>
      <div className="m-4">
        {/* <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload Images
            <PhotoCamera />
          </Button>
        </label> */}
        <VehiclesImageList service_id={vehicle.id} />
      </div>
      <div className="m-4 ml-auto p-4 flex">
        <Button style={{ margin: "0.5rem" }} variant="contained">
          Discard Changes
        </Button>
        <Button
          onClick={handleClick}
          style={{ margin: "0.5rem" }}
          variant="contained"
        >
          Save & Exit
        </Button>
      </div>
    </Box>
  );
}

export default EditVehicle;
