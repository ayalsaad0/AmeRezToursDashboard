import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Axios from "axios";
import { useStateContext } from "../contexts/ContextProvider";

function AddActivity({ activity_id }) {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(activity_id);

  const { setActiveAddPopup } = useStateContext();

  const handleClick = async () => {
    console.log(activity_id);
    await Axios.post("http://localhost:3001/add-activity", {
      title: title,
      description: description,
      price: price,
      id: id,
    }).then((response) => {
      console.log(response);
    });
    setActiveAddPopup(false);
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
          label="Title"
          type="search"
          variant="filled"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="filled-number"
          label="Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="m-4">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Available"
        />
      </div>
      <div className="m-4">
        <label htmlFor="contained-button-file">
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
        </label>
      </div>
      <div className="m-4">
        <TextareaAutosize
          className="border border-black rounded-lg p-4"
          aria-label="empty textarea"
          placeholder="Description"
          style={{ width: "100%", minHeight: "5rem" }}
          onChange={(e) => setDesciption(e.target.value)}
        />
      </div>
      <div className="m-4 ml-auto p-4 flex">
        <Button variant="contained" style={{ margin: "0.5rem" }}>
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

export default AddActivity;
