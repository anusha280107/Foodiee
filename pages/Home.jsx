import React, { useEffect, useState } from "react";
import { getFoods } from "../services/api";
import { useNavigate } from "react-router-dom";
function Home() {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const data = await getFoods();
      setFoods(data);
      setFilteredFoods(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    let result = foods;

    if (category !== "All") {
      result = result.filter(
        (food) => food.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search !== "") {
      result = result.filter(
        (food) =>
          food.name.toLowerCase().includes(search.toLowerCase()) ||
          food.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredFoods(result);
  }, [search, category, foods]);

  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>🍔 Welcome to Foodiee</h1>

          <p>
            Fresh Food • Delicious Recipes • Build Your Own Combo
          </p>

          <input
            type="text"
            placeholder="🔍 Search your favourite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>

      {/* Category Buttons */}

      <section className="categories">

  

  <button onClick={() => navigate("/veg")}>
    Veg
  </button>

  <button onClick={() => navigate("/nonveg")}>
    Non Veg
  </button>

  <button onClick={() => navigate("/desserts")}>
    Dessert
  </button>

  <button onClick={() => navigate("/drinks")}>
    Drinks
  </button>

  <button onClick={() => navigate("/healthy")}>
    Healthy
  </button>

</section>

      {/* Food Cards */}

      <section className="food-section">

        <h2>🍽 Popular Foods</h2>

        {loading ? (
          <h2>Loading Foods...</h2>
        ) : filteredFoods.length === 0 ? (
          <h2>No Food Found</h2>
        ) : (
          <div className="food-grid">

            {filteredFoods.map((food) => (

              <div className="food-card" key={food.id}>

                <img
                  src={food.image}
                  alt={food.name}
                />

                <div className="food-details">

                  <h3>{food.name}</h3>

                  <p className="category">
                    {food.category}
                  </p>

                  <p className="description">
                    {food.description}
                  </p>

                  <div className="price-rating">

                    <span className="price">
                      ₹ {food.price}
                    </span>

                    <span className="rating">
                      ⭐ {food.rating}
                    </span>

                  </div>

                  <button className="order-btn">
                    Order Now
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </section>

      {/* Why Choose Us */}

      <section className="why-us">

        <h2>Why Choose Foodiee?</h2>

        <div className="features">

          <div className="feature">
            🚚
            <h3>Fast Delivery</h3>
            <p>Food delivered within 30 minutes.</p>
          </div>

          <div className="feature">
            🍴
            <h3>Fresh Food</h3>
            <p>Prepared with quality ingredients.</p>
          </div>

          <div className="feature">
            ⭐
            <h3>Top Rated</h3>
            <p>Loved by thousands of customers.</p>
          </div>

          <div className="feature">
            💳
            <h3>Easy Payment</h3>
            <p>Secure online payment options.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;