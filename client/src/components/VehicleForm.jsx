import React from "react";
import { useForm } from "react-hook-form";
import ServiceImageList from "./ServiceImageList";
import { useStateContext } from "../contexts/ContextProvider";
import { FetchVehicles } from "../data/Vehicles";

function VehicleForm({ vehicle, onClose }) {
  const { setVehicles } = useStateContext();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: vehicle.title,
      places: vehicle.places,
      suitcases: vehicle.suitcases,
      price: vehicle.price,
      available: vehicle.available,
      driver: vehicle.driver,
      quantity: vehicle.quantity,
      images: [],
    },
  });

  const onSubmit = (data) => {
    const {
      title,
      places,
      suitcases,
      price,
      available,
      driver,
      quantity,
      images,
    } = data;

    const imagesArr = Array.from(images);

    const payload = {
      title,
      places,
      suitcases,
      price,
      available,
      driver,
      quantity,
      imagesArr,
    };
    console.log("payload: ");
    console.log(payload);
    fetch(
      vehicle.length === 0
        ? `http://localhost:3001/addVehicle`
        : `http://localhost:3001/updateVehicle`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            alert(jsonRes.message);
          } else {
            alert(jsonRes.message);
            setVehicles(FetchVehicles());
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    onClose();
  };

  return (
    <form
      className="w-5/5 max-w-screen-lg mt-0 mb-0 ml-auto mr-auto flex flex-col p-4 justify-center shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Title</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="text"
        placeholder={vehicle.title || "Title"}
        {...register("title", { required: true })}
      />
      <label>Places</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="number"
        placeholder={vehicle.places || "Places"}
        {...register("places", { required: true })}
      />
      <label>Suitcases</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="number"
        placeholder={vehicle.suitcases || "Suitcases"}
        {...register("suitcases", { required: true })}
      />
      <label>Price</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="number"
        placeholder={vehicle.price || "Price"}
        {...register("price", { required: true })}
      />
      <label>Available</label>
      {vehicle.available === 1 ? (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          checked
          {...register("available")}
        />
      ) : (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          {...register("available")}
        />
      )}
      <label>Driver</label>
      {vehicle.driver === 1 ? (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          checked
          {...register("driver")}
        />
      ) : (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          {...register("driver")}
        />
      )}
      <label>Quantity</label>
      <input
        type="number"
        className="m-4 border border-black rounded-lg p-2"
        placeholder={vehicle.quantity || "Quantity"}
        {...register("quantity", { required: true })}
      />
      <ServiceImageList service_id={vehicle.id} />
      <label>Upload Images</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="file"
        multiple="multiple"
        placeholder="Upload image"
        accept="image/*"
        {...register("images[]")}
      />
      <button onClick={onClose}>Discard Changes</button>
      <input className="m-4" type="submit" value="Save & Exit" />
    </form>
  );
}

export default VehicleForm;
