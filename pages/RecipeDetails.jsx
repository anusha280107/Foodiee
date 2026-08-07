import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

function RecipeDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const recipe = location.state;

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe Not Found</h2>

        <button
          className="back-btn"
          onClick={() => navigate("/recipes")}
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div className="recipe-details">

      <button
        className="back-btn"
        onClick={() => navigate("/recipes")}
      >
        ← Back
      </button>

      <h1>{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="recipe-image"
      />

      <div className="recipe-info">

        <p>
          <strong>🍛 Category:</strong> {recipe.strCategory}
        </p>

        <p>
          <strong>🌍 Cuisine:</strong> {recipe.strArea}
        </p>

        <p>
          <strong>🥘 Tags:</strong>{" "}
          {recipe.strTags ? recipe.strTags : "Not Available"}
        </p>

      </div>

      <h2>📝 Ingredients</h2>

      <ul className="ingredients">

        {Array.from({ length: 20 }, (_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];

          return ingredient && ingredient.trim() !== "" ? (
            <li key={i}>
              {measure} {ingredient}
            </li>
          ) : null;
        })}

      </ul>

      <h2>👨‍🍳 Cooking Instructions</h2>

      <p className="instructions">
        {recipe.strInstructions}
      </p>

      {recipe.strYoutube && (
        <>
          <h2>🎥 Watch Recipe Video</h2>

          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            <button className="video-btn">
              Watch on YouTube
            </button>
          </a>
        </>
      )}

    </div>
  );
}

export default RecipeDetails;