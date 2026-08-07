import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Desserts() {
  const navigate = useNavigate();

  const desserts = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    },
    {
      id: 2,
      name: "Ice Cream",
      price: 120,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    },
    {
      id: 3,
      name: "Gulab Jamun",
      price: 100,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
    },
    {
      id: 4,
      name: "Brownie",
      price: 150,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    },
    {
      id: 5,
      name: "Strawberry Cheesecake",
      price: 220,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
    },
  ];

  return (
    <div className="category-page">
      <h1>🍰 Desserts</h1>

      <div className="food-container">
        {desserts.map((food) => (
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

export default Desserts;