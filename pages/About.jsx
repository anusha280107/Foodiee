import React from "react";

function About() {
  return (
    <div className="about">

      {/* Hero Section */}

      <section className="about-banner">

        <h1>🍴 About Foodiee</h1>

        <p>
          Bringing delicious food, exciting recipes, and memorable dining
          experiences to everyone.
        </p>

      </section>

      {/* Story */}

      <section className="about-section">

        <div className="about-text">

          <h2>Our Story</h2>

          <p>
            Foodiee was created with one mission—to make discovering,
            ordering, and enjoying delicious food simple and enjoyable.
            Whether you're craving fast food, healthy meals, desserts,
            or refreshing drinks, Foodiee brings everything together in
            one place.
          </p>

          <p>
            Our platform allows customers to explore foods, discover
            recipes, and even create their own custom food combinations.
          </p>

        </div>

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700"
            alt="Restaurant"
          />

        </div>

      </section>

      {/* Mission */}

      <section className="mission">

        <h2>🎯 Our Mission</h2>

        <div className="mission-cards">

          <div className="mission-card">

            <h3>🍔 Quality Food</h3>

            <p>
              We provide only the highest quality food prepared with fresh
              ingredients.
            </p>

          </div>

          <div className="mission-card">

            <h3>🚀 Fast Delivery</h3>

            <p>
              Delivering your favourite meals quickly and safely.
            </p>

          </div>

          <div className="mission-card">

            <h3>😊 Happy Customers</h3>

            <p>
              Customer satisfaction is always our highest priority.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="about-stats">

        <div className="stat">

          <h1>1000+</h1>

          <p>Happy Customers</p>

        </div>

        <div className="stat">

          <h1>250+</h1>

          <p>Recipes</p>

        </div>

        <div className="stat">

          <h1>150+</h1>

          <p>Food Items</p>

        </div>

        <div className="stat">

          <h1>4.9 ⭐</h1>

          <p>Customer Rating</p>

        </div>

      </section>

    </div>
  );
}

export default About;