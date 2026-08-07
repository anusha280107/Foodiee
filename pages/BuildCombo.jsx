import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function BuildCombo() {
  const navigate = useNavigate();

  const foods = [
    {
      id: 1,
      name: "Burger",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    },
    {
      id: 3,
      name: "French Fries",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
    },
    {
      id: 4,
      name: "Sandwich",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    },
    {
      id: 5,
      name: "Cold Coffee",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
    },
  ];

  const [combo, setCombo] = useState([]);
  const [message, setMessage] = useState("");

  // Add Item
  const addItem = (food) => {
    if (combo.length >= 3) {
      setMessage("⚠ You can select only 3 dishes for your combo!");
      return;
    }

    const alreadyAdded = combo.find((item) => item.id === food.id);

    if (alreadyAdded) {
      setMessage("⚠ Food already added!");
      return;
    }

    setCombo([...combo, food]);
    setMessage("");
  };

  // Remove Item
  const removeItem = (index) => {
    const updated = [...combo];
    updated.splice(index, 1);
    setCombo(updated);
  };

  // Total Price
  const total = combo.reduce((sum, item) => sum + item.price, 0);

  // 10% Discount for 3 items
  const discount = combo.length === 3 ? total * 0.1 : 0;

  // Final Price
  const finalTotal = total - discount;

  // Checkout
  const proceedCheckout = () => {
    navigate("/checkout", {
      state: {
        comboItems: combo,
        totalAmount: finalTotal,
      },
    });
  };

  return (
    <div className="combo-container">
      <h1>🍔 Build Your Own Combo</h1>

      {message && <p className="message">{message}</p>}

      <div className="food-grid">
        {foods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>

            <button
              className="combo-btn"
              onClick={() => addItem(food)}
            >
              Add To Combo
            </button>
          </div>
        ))}
      </div>

      <div className="selected-combo">
        <h2>Your Combo</h2>

        {combo.length === 0 ? (
          <p>No food selected.</p>
        ) : (
          combo.map((item, index) => (
            <div className="combo-item" key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {combo.length > 0 && (
          <>
            <hr />

            <h3>Original Price : ₹{total}</h3>

            {discount > 0 && (
              <h3 style={{ color: "green" }}>
                Combo Discount (10%) : -₹{discount.toFixed(0)}
              </h3>
            )}

            <h2 style={{ color: "#ff5722" }}>
              Final Price : ₹{finalTotal.toFixed(0)}
            </h2>

            <button
              className="checkout-btn"
              onClick={proceedCheckout}
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default BuildCombo;