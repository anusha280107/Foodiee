import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Recipe.css";
function RecipeDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const recipe = location.state;

  if (!recipe) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate("/recipes")}>
          Back to Recipes
        </button>
      </div>
    );
  }

  const recipeSteps = {
    "Chicken Biryani": [
      "Wash and soak the basmati rice for 30 minutes.",
      "Marinate the chicken with curd, ginger-garlic paste, chilli powder and spices.",
      "Heat oil and fry sliced onions until golden brown.",
      "Add marinated chicken and cook for 15 minutes.",
      "Boil the rice until it is 70% cooked.",
      "Layer the rice over the cooked chicken.",
      "Sprinkle fried onions, mint leaves and coriander leaves.",
      "Add saffron milk or food colour for rich flavour.",
      "Cover the vessel and cook on low flame for 20 minutes.",
      "Serve hot with onion raita and boiled egg."
    ],

    "Veg Pizza": [
      "Preheat the oven to 200°C.",
      "Spread pizza sauce over the pizza base.",
      "Add chopped onions, capsicum and tomatoes.",
      "Sprinkle sweet corn and olives.",
      "Cover with mozzarella cheese.",
      "Add oregano and chilli flakes.",
      "Bake for 15 minutes.",
      "Remove when cheese melts completely.",
      "Cut into equal slices.",
      "Serve hot with tomato ketchup."
    ],

    "Burger": [
      "Toast the burger buns lightly.",
      "Cook the burger patty until golden.",
      "Spread mayonnaise on the buns.",
      "Place lettuce leaves on the bottom bun.",
      "Add tomato and onion slices.",
      "Place the burger patty.",
      "Add a cheese slice.",
      "Cover with the top bun.",
      "Serve with French fries.",
      "Enjoy with cold drinks."
    ],

    "Pasta": [
      "Boil pasta until soft.",
      "Drain the water completely.",
      "Heat butter in a pan.",
      "Prepare white sauce using milk and flour.",
      "Add cheese and black pepper.",
      "Mix boiled vegetables.",
      "Add cooked pasta.",
      "Cook for another 5 minutes.",
      "Garnish with herbs.",
      "Serve hot."
    ],

    "Chocolate Cake": [
      "Preheat the oven to 180°C.",
      "Mix flour, cocoa powder and baking powder.",
      "Beat eggs with sugar and butter.",
      "Mix wet and dry ingredients.",
      "Pour batter into the cake tin.",
      "Bake for 35 minutes.",
      "Allow the cake to cool.",
      "Apply chocolate frosting.",
      "Decorate with chocolate chips.",
      "Slice and serve."
    ],

    "Fresh Juice": [
      "Wash fresh fruits thoroughly.",
      "Peel the fruits if required.",
      "Cut them into small pieces.",
      "Add fruits to the blender.",
      "Pour a little chilled water.",
      "Blend until smooth.",
      "Filter if needed.",
      "Add sugar or honey as desired.",
      "Serve with ice cubes.",
      "Enjoy fresh and healthy juice."
    ]
  };

  return (
    <div className="recipe-details">

      <button
        className="back-btn"
        onClick={() => navigate("/recipes")}
      >
        ← Back
      </button>

      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      <h1>{recipe.name}</h1>

      <p><strong>⭐ Rating:</strong> {recipe.rating}</p>

      <p><strong>⏱ Time:</strong> {recipe.time}</p>

      <p><strong>👨‍🍳 Difficulty:</strong> {recipe.difficulty}</p>

      <h2>🥗 Ingredients</h2>

      <p>{recipe.ingredients}</p>

      <h2>📖 Preparation Steps</h2>

      <ol>
        {recipeSteps[recipe.name].map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

    </div>
  );
}

export default RecipeDetails;