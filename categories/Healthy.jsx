import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";

function Healthy() {
  const navigate = useNavigate();

  const healthyFoods = [
    {
      id: 1,
      name: "Fruit Salad",
      price: 120,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
    },
    {
      id: 2,
      name: "Grilled Chicken Salad",
      price: 220,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
    },
    {
      id: 3,
      name: "Oats Bowl",
      price: 140,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=500",
    },
    {
      id: 4,
      name: "Avocado Toast",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
    },
    {
      id: 5,
      name: "Green Smoothie Bowl",
      price: 190,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    },
  ];

  return (
    <div className="category-page">
      <h1>🥗 Healthy Foods</h1>

      <div className="food-container">
        {healthyFoods.map((food) => (
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

export default Healthy;