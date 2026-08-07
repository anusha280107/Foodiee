import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFood } from "../services/api";

function AddFood() {
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !food.name ||
      !food.category ||
      !food.price ||
      !food.rating ||
      !food.image ||
      !food.description
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await addFood(food);

      alert("Food Added Successfully!");

      navigate("/managefoods");
    } catch (error) {
      console.log(error);
      alert("Unable to add food.");
    }
  };

  return (
    <div className="add-food">

      <div className="form-container">

        <h1>➕ Add New Food</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={food.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={food.category}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={food.price}
            onChange={handleChange}
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating (1-5)"
            value={food.rating}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={food.image}
            onChange={handleChange}
          />

          {food.image && (
            <div className="image-preview">
              <img
                src={food.image}
                alt="Preview"
                width="220"
                height="150"
              />
            </div>
          )}

          <textarea
            name="description"
            rows="5"
            placeholder="Food Description"
            value={food.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="save-btn">
            Add Food
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddFood;