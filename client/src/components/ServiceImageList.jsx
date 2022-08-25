import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// The service (vehicle, attraction) gallery which shown in the form
export default function ServiceImageList({ images }) {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid",
        boxShadow: "10px 10px 5px #aaaaaa",
        marginBottom: "3rem",
      }}
      cols={3}
      rowHeight={164}
    >
      {images.map((item) => (
        <ImageListItem key={item.link}>
          <img
            src={`${item.link}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.link}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
