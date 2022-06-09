import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FetchVehiclesImages } from "../data/Images";

export default function VehiclesImageList({ service_id }) {
  const vehicles_images = FetchVehiclesImages(service_id);
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {vehicles_images.map((item) => (
        <ImageListItem key={item.link}>
          <img
            src={`${item.link}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.link}
            className=""
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
