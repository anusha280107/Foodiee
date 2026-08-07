import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

function NonVeg() {
  const navigate = useNavigate();

  const nonVegFoods = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 250,
      rating: 4.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacu7KPg6_E96QCX5c4FhjuzsTLGUvDLmiSw&s",
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: 280,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    },
    {
      id: 3,
      name: "Fish Fry",
      price: 220,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
    },
    {
      id: 4,
      name: "Mutton Curry",
      price: 320,
      rating: 4.9,
      image:
        "https://static.vecteezy.com/system/resources/previews/069/409/840/non_2x/a-bowl-of-delicious-mutton-curry-garnished-with-fresh-parsley-isolated-on-transparent-background-free-png.png",

    },
    {
      id: 5,
      name: "Chicken Shawarma",
      price: 180,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500",
    },
  ];

  return (
    <div className="category-page">
      <h1>🍗 Non-Veg Foods</h1>

      <div className="food-container">
        {nonVegFoods.map((food) => (
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

export default NonVeg;