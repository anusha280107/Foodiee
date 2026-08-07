import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Drinks() {
  const navigate = useNavigate();

  const drinks = [
    {
      id: 1,
      name: "Mango Juice",
      price: 80,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
    },
    {
      id: 2,
      name: "Cold Coffee",
      price: 120,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500",
    },
    {
      id: 3,
      name: "Chocolate Milkshake",
      price: 150,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    },
    {
      id: 4,
      name: "Fresh Lemon Juice",
      price: 60,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500",
    },
    {
      id: 5,
      name: "Strawberry Smoothie",
      price: 170,
      rating: 4.8,
      image:
        "https://static.vecteezy.com/system/resources/previews/071/169/686/non_2x/slice-of-strawberry-cheesecake-with-fresh-berries-on-white-plate-transparent-background-free-png.png",

    }
  ];

  return (
    <div className="category-page">
      <h1>🥤 Drinks</h1>

      <div className="food-container">
        {drinks.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />

            <h3>{food.name}</h3>

            <p className="price">₹{food.price}</p>

            <p className="rating">⭐ {food.rating}</p>

            <button
              onClick={() =>
                navigate("/checkout", {
                  state: food,
                })
              }
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drinks;