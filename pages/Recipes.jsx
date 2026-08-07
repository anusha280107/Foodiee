import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";
function Recipes() {
  const navigate = useNavigate();

  const recipeData = [
    {
      id: 1,
      name: "Chicken Biryani",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
      time: "45 mins",
      difficulty: "Medium",
      rating: "4.9",
      ingredients: "Rice, Chicken, Spices",
    },
    {
      id: 2,
      name: "Veg Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      time: "30 mins",
      difficulty: "Easy",
      rating: "4.8",
      ingredients: "Cheese, Vegetables, Dough",
    },
    {
      id: 3,
      name: "Burger",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      time: "20 mins",
      difficulty: "Easy",
      rating: "4.7",
      ingredients: "Bun, Patty, Cheese",
    },
    {
      id: 4,
      name: "Pasta",
      image:
        "https://png.pngtree.com/png-vector/20240721/ourmid/pngtree-a-bowl-of-pasta-with-tomatoes-and-basil-png-image_13182419.png",
      time: "25 mins",
      difficulty: "Easy",
      rating: "4.8",
      ingredients: "Pasta, Sauce, Cheese",
    },
    {
      id: 5,
      name: "Chocolate Cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      time: "60 mins",
      difficulty: "Hard",
      rating: "5.0",
      ingredients: "Chocolate, Flour, Eggs",
    },
    {
      id: 6,
      name: "Fresh Juice",
      image:
        "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600",
      time: "10 mins",
      difficulty: "Easy",
      rating: "4.9",
      ingredients: "Fresh Fruits",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredRecipes = recipeData.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="recipes">
      <div className="recipe-banner">
        <h1>🍽 Delicious Recipes</h1>

        <p>Discover tasty recipes prepared by our expert chefs.</p>
      </div>

      <div className="recipe-search">
        <input
          type="text"
          placeholder="Search Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />

            <div className="recipe-content">
              <h2>{recipe.name}</h2>

              <p>⭐ {recipe.rating}</p>

              <p>⏱ {recipe.time}</p>

              <p>👨‍🍳 {recipe.difficulty}</p>

              <p>🥗 {recipe.ingredients}</p>

              <button
                className="recipe-btn"
                onClick={() =>
                  navigate(`/recipe/${recipe.id}`, {
                    state: recipe,
                  })
                }
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;