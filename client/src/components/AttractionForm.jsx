import React from "react";
import { useForm } from "react-hook-form";
import ServiceImageList from "./ServiceImageList";

function AttractionForm({ attraction, onClose }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: attraction.title,
      location: attraction.location,
      price: attraction.price,
      availability: attraction.availability,
      description: attraction.description,
      images: [],
    },
  });

  console.log(attraction);

  const onSubmit = (data) => {
    const { availability, description, images, location, price, title } = data;

    const imagesArr = Array.from(images);

    const payload = {
      availability,
      description,
      imagesArr,
      location,
      price,
      title,
    };
    fetch(
      attraction.length === 0
        ? `http://localhost:3001/addAttraction`
        : `http://localhost:3001/updateAttraction`,
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
      className="w-5/5 max-w-screen-lg mt-0 mb-0 ml-auto mr-auto flex flex-col p-4 justify-center shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Title</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="text"
        placeholder={attraction.title || "Title"}
        {...register("title", { required: true })}
      />
      <label>Location</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="text"
        placeholder={attraction.location || "Location"}
        {...register("location", { required: true })}
      />
      <label>Price</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="number"
        placeholder={attraction.price || "Price"}
        {...register("price", { required: true })}
      />
      <label>Available</label>
      {attraction.availability === 1 ? (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          checked
          {...register("availability")}
        />
      ) : (
        <input
          className="m-4 border border-black rounded-lg p-2"
          type="checkbox"
          {...register("availability")}
        />
      )}
      <ServiceImageList service_id={attraction.id} />
      <label>Upload Images</label>
      <input
        className="m-4 border border-black rounded-lg p-2"
        type="file"
        multiple="multiple"
        placeholder="Upload image"
        accept="image/*"
        {...register("images[]")}
      />
      <label>Description</label>
      <textarea
        className="m-4 border border-black rounded-lg p-4"
        placeholder={attraction.description || "Description"}
        {...register("description", { required: true })}
      />
      <button onClick={onClose}>Discard Changes</button>
      <input className="m-4" type="submit" value="Save & Exit" />
    </form>
  );
}

export default AttractionForm;
