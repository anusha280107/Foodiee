import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const food = location.state;

  if (!food) {
    return (
      <div className="checkout-page">
        <h2>No food selected.</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>🛒 Checkout</h1>

      <div className="checkout-card">
        <img src={food.image} alt={food.name} />

        <div className="checkout-details">
          <h2>{food.name}</h2>

          <p>
            <strong>Price:</strong> ₹{food.price}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {food.rating}
          </p>

          <label>Customer Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Delivery Address</label>
          <textarea placeholder="Enter your address"></textarea>

          <button
            className="order-btn"
            onClick={() => {
              alert("🎉 Order Placed Successfully!");
              navigate("/");
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;