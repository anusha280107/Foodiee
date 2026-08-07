import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFoodById, updateFood } from "../services/api";

function EditFood() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState({
    name: "",
    category: "",
    price: "",
    rating: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    loadFood();
  }, []);

  const loadFood = async () => {
    try {
      const data = await getFoodById(id);
      setFood(data);
    } catch (error) {
      console.log(error);
      alert("Unable to load food details.");
    }
  };

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
      await updateFood(id, food);

      alert("Food Updated Successfully!");

      navigate("/managefoods");
    } catch (error) {
      console.log(error);
      alert("Unable to update food.");
    }
  };

  return (
    <div className="edit-food">

      <div className="form-container">

        <h1>✏ Edit Food</h1>

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
            placeholder="Rating"
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
                alt={food.name}
                width="220"
                height="150"
              />

            </div>
          )}

          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            value={food.description}
            onChange={handleChange}
          ></textarea>

          <button className="update-btn" type="submit">
            Update Food
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditFood;