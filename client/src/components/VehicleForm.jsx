import React from "react";
import { useForm } from "react-hook-form";
import ServiceImageList from "./ServiceImageList";

// The vehicle form component (add and edit form)
function VehicleForm({ vehicle, onClose }) {
  // if it's an edit form, then we have a default values in the form, which are the details of the vehicle that we want to edit
  // if it's an add form, then we don't have any default values
  const { register, handleSubmit } = useForm({
    defaultValues:
      vehicle.length === 0
        ? {
            title: "",
            places: 0,
            suitcases: 0,
            price: 0,
            available: 0,
            driver: 0,
            quantity: 0,
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            image5: "",
          }
        : {
            title: vehicle.title,
            places: vehicle.places,
            suitcases: vehicle.suitcases,
            price: vehicle.price,
            available: vehicle.available,
            driver: vehicle.driver,
            quantity: vehicle.quantity,
            image1: vehicle.images.length >= 1 ? vehicle.images[0].link : "",
            image2: vehicle.images.length >= 2 ? vehicle.images[1].link : "",
            image3: vehicle.images.length >= 3 ? vehicle.images[2].link : "",
            image4: vehicle.images.length >= 4 ? vehicle.images[3].link : "",
            image5: vehicle.images.length >= 5 ? vehicle.images[4].link : "",
          },
  });

  // After submitting the form
  const onSubmit = (data) => {
    const {
      title,
      places,
      suitcases,
      price,
      available,
      driver,
      quantity,
      image1,
      image2,
      image3,
      image4,
      image5,
    } = data;

    const imagesArr = [image1, image2, image3, image4, image5];

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
      className="max-w-screen-lg mt-0 mb-0 ml-auto mr-auto flex flex-col p-4 justify-center shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title */}
      <div className="flex flex-col m-4">
        <label>Title</label>
        <input
          className="border border-black rounded-lg p-2"
          type="text"
          placeholder={vehicle.title || "Title"}
          {...register("title", { required: true })}
        />
      </div>
      {/* Number of places and suitcases */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Places</label>
          <input
            className="border border-black rounded-lg p-2"
            type="number"
            placeholder={vehicle.places || "Places"}
            {...register("places", { required: true })}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Suitcases</label>
          <input
            className="border border-black rounded-lg p-2"
            type="number"
            placeholder={vehicle.suitcases || "Suitcases"}
            {...register("suitcases", { required: true })}
          />
        </div>
      </div>
      {/* Price and quantity of the vehicle */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Price</label>
          <input
            className="border border-black rounded-lg p-2"
            type="number"
            placeholder={vehicle.price || "Price"}
            {...register("price", { required: true })}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Quantity</label>
          <input
            type="number"
            className="border border-black rounded-lg p-2"
            placeholder={vehicle.quantity || "Quantity"}
            {...register("quantity", { required: true })}
          />
        </div>
      </div>
      {/* Availability and with/out driver */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Available</label>
          {vehicle.available === 1 ? (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              checked
              {...register("available")}
            />
          ) : (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              {...register("available")}
            />
          )}
        </div>
        <div className="flex flex-col m-4">
          <label>Driver</label>
          {vehicle.driver === 1 ? (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              checked
              {...register("driver")}
            />
          ) : (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              {...register("driver")}
            />
          )}
        </div>
      </div>
      {/* Images links */}
      <div className="flex flex-col m-4">
        <label>Upload Images</label>
        <input
          className="mb-2 border border-black rounded-lg p-2"
          type="text"
          placeholder="Image 1"
          {...register("image1")}
        />
        <input
          className="mb-2 border border-black rounded-lg p-2"
          type="text"
          placeholder="Image 2"
          {...register("image2")}
        />
        <input
          className="mb-2 border border-black rounded-lg p-2"
          type="text"
          placeholder="Image 3"
          {...register("image3")}
        />
        <input
          className="mb-2 border border-black rounded-lg p-2"
          type="text"
          placeholder="Image 4"
          {...register("image4")}
        />
        <input
          className="mb-2 border border-black rounded-lg p-2"
          type="text"
          placeholder="Image 5"
          {...register("image5")}
        />
      </div>
      {/* Images gallery */}
      <div className="flex flex-col">
        <ServiceImageList images={vehicle.images || []} />
      </div>
      {/* Form buttons */}
      <div className="flex ml-auto">
        <button onClick={onClose}>Discard Changes</button>
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="submit"
          value="Save & Exit"
        />
      </div>
    </form>
  );
}

export default VehicleForm;
