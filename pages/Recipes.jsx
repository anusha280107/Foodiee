import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setRecipes(data.meals);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const searchRecipe = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
      });
  };

  return (
    <div className="recipes">

      <div className="recipe-banner">
        <h1>🍽 Delicious Recipes</h1>
        <p>Explore recipes from TheMealDB API</p>
      </div>

      <div className="recipe-search">

        <input
          type="text"
          placeholder="Search Recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchRecipe}>
          Search
        </button>

      </div>

      <div className="recipe-grid">

        {recipes.map((recipe) => (

          <div className="recipe-card" key={recipe.idMeal}>

            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />

            <div className="recipe-content">

              <h2>{recipe.strMeal}</h2>

              <p>
                🍛 {recipe.strCategory}
              </p>

              <p>
                🌍 {recipe.strArea}
              </p>

              <button
                className="recipe-btn"
                onClick={() =>
                  navigate("/recipe/" + recipe.idMeal, {
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