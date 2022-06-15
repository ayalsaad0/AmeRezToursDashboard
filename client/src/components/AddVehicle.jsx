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

const AddVehicle = ({ vehicle_id }) => {
  const [title, setTitle] = useState("");
  const [places, setPlaces] = useState("");
  const [suitcases, setSuitcases] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(vehicle_id);
  const [link, setLink] = useState("");

  const { setActiveAddPopup } = useStateContext();

  const handleClick = async () => {
    await Axios.post("http://localhost:3001/add-vehicle", {
      id: id,
      title: title,
      places: places,
      suitcases: suitcases,
      price: price,
    }).then((response) => {
      console.log(response);
    });
    setActiveAddPopup(false);
  };

  const addImage = async () => {
    await Axios.post("http://localhost:3001/add-image", {
      link: link,
      service_id: id,
    })
      .then((response) => {
        console.log(response);
      })
      .catch();
    setLink("");
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
          label="Title/Model"
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
        <TextField
          id="filled-search"
          label="Add new image link"
          type="search"
          variant="filled"
          onChange={(e) => setLink(e.target.value)}
        />
        <Button
          startIcon={<PhotoCamera />}
          style={{ margin: "0.5rem" }}
          variant="contained"
          onClick={addImage}
        >
          Add
        </Button>
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
};
export default AddVehicle;
