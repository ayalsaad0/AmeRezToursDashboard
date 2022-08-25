import React from "react";
import { useForm } from "react-hook-form";
import ServiceImageList from "./ServiceImageList";

// The attraction form component (add and edit form)
function AttractionForm({ attraction, onClose }) {
  // if it's an edit form, then we have a default values in the form, which are the details of the attraction that we want to edit
  // if it's an add form, then we don't have any default values
  const { register, handleSubmit } = useForm({
    defaultValues:
      attraction.length === 0
        ? {
            title: "",
            location: "",
            price: 0,
            availability: 0,
            description: "",
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            image5: "",
          }
        : {
            title: attraction.title,
            location: attraction.location,
            price: attraction.price,
            availability: attraction.availability,
            description: attraction.description,
            image1:
              attraction.images.length >= 1 ? attraction.images[0].link : "",
            image2:
              attraction.images.length >= 2 ? attraction.images[1].link : "",
            image3:
              attraction.images.length >= 3 ? attraction.images[2].link : "",
            image4:
              attraction.images.length >= 4 ? attraction.images[3].link : "",
            image5:
              attraction.images.length >= 5 ? attraction.images[4].link : "",
          },
  });

  // After submitting the form
  const onSubmit = (data) => {
    const {
      availability,
      description,
      location,
      price,
      title,
      image1,
      image2,
      image3,
      image4,
      image5,
    } = data;

    const imagesArr = [image1, image2, image3, image4, image5];

    const payload = {
      availability,
      description,
      location,
      price,
      title,
      imagesArr,
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
      className="max-w-screen-lg mt-0 mb-0 ml-auto mr-auto flex flex-col p-4 justify-center shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title and Location */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Title</label>
          <input
            className="border border-black rounded-lg p-2"
            type="text"
            placeholder={attraction.title || "Title"}
            {...register("title", { required: true })}
          />
        </div>
        <div className="flex flex-col m-4">
          <label>Location</label>
          <input
            className="border border-black rounded-lg p-2"
            type="text"
            placeholder={attraction.location || "Location"}
            {...register("location", { required: true })}
          />
        </div>
      </div>
      {/* Price */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Price</label>
          <input
            className="border border-black rounded-lg p-2"
            type="number"
            placeholder={attraction.price || "Price"}
            {...register("price", { required: true })}
          />
        </div>
      </div>
      {/* Availability */}
      <div className="flex">
        <div className="flex flex-col m-4">
          <label>Available</label>
          {attraction.availability === 1 ? (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              checked
              {...register("availability")}
            />
          ) : (
            <input
              className="border border-black rounded-lg p-2"
              type="checkbox"
              {...register("availability")}
            />
          )}
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          className="mb-4 border border-black rounded-lg p-4"
          placeholder={attraction.description || "Description"}
          {...register("description", { required: true })}
        />
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
        <ServiceImageList images={attraction.images || []} />
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

export default AttractionForm;
