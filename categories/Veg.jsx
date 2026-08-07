import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

function Veg() {
  const navigate = useNavigate();

  const vegFoods = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      price: 220,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    },
    {
      id: 2,
      name: "Veg Biryani",
      price: 180,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
    },
    {
      id: 3,
      name: "Masala Dosa",
      price: 120,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
    },
    {
      id: 4,
      name: "Chole Bhature",
      price: 160,
      rating: 4.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QeGjiDLPwPtxHEnw4MNkrQUn-a-dD4obZg&s",
    },
    {
      id: 5,
      name: "Veg Fried Rice",
      price: 170,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
    },
  ];

  return (
    <div className="category-page">
      <h1>🥗 Veg Foods</h1>

      <div className="food-container">
        {vegFoods.map((food) => (
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

export default Veg;