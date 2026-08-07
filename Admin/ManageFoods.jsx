import React, { useEffect, useState } from "react";
import { getFoods, deleteFood } from "../services/api";
import { Link } from "react-router-dom";

function ManageFoods() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const data = await getFoods();
      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (confirmDelete) {
      await deleteFood(id);
      alert("Food Deleted Successfully!");
      loadFoods();
    }
  };

  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-foods">

      <div className="manage-header">

        <h1>🍔 Manage Foods</h1>

        <Link to="/addfood">
          <button className="add-btn">
            + Add Food
          </button>
        </Link>

      </div>

      <input
        type="text"
        placeholder="🔍 Search Food..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="food-table">

        <thead>

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

            <th>Rating</th>

            <th>Description</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredFoods.length === 0 ? (

            <tr>

              <td colSpan="7">
                No Foods Found
              </td>

            </tr>

          ) : (

            filteredFoods.map((food) => (

              <tr key={food.id}>

                <td>

                  <img
                    src={food.image}
                    alt={food.name}
                    className="table-image"
                  />

                </td>

                <td>{food.name}</td>

                <td>{food.category}</td>

                <td>₹ {food.price}</td>

                <td>⭐ {food.rating}</td>

                <td>{food.description}</td>

                <td>

                  <Link to={`/editfood/${food.id}`}>

                    <button className="edit-btn">
                      Edit
                    </button>

                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(food.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ManageFoods;