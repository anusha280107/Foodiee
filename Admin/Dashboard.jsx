import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFoods } from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [totalFoods, setTotalFoods] = useState(0);

  useEffect(() => {
    loadFoods();
  }, []);

  const loadFoods = async () => {
    try {
      const data = await getFoods();
      setTotalFoods(data.length);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin");
    alert("Logged Out Successfully");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="dashboard">

      

      <div className="dashboard-header">

        <h1>👨‍💼 Admin Dashboard</h1>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      

      <div className="welcome-card">

        <h2>Welcome Admin 👋</h2>

        <p>
          Manage your Foodiee website from one place.
        </p>

      </div>

      

      <div className="stats-container">

        <div className="stat-card">

          <h3>🍔 Total Foods</h3>

          <h1>{totalFoods}</h1>

        </div>

        <div className="stat-card">

          <h3>📂 Categories</h3>

          <h1>5+</h1>

        </div>

        <div className="stat-card">

          <h3>⭐ Ratings</h3>

          <h1>4.9</h1>

        </div>

        <div className="stat-card">

          <h3>👨‍🍳 Recipes</h3>

          <h1>50+</h1>

        </div>

      </div>

      

      <div className="dashboard-menu">

        <Link to="/addfood" className="menu-card">

          <div className="icon">
            ➕
          </div>

          <h2>Add Food</h2>

          <p>
            Add a new food item to MockAPI.
          </p>

        </Link>

        <Link to="/managefoods" className="menu-card">

          <div className="icon">
            📝
          </div>

          <h2>Manage Foods</h2>

          <p>
            Edit or Delete existing food items.
          </p>

        </Link>

      </div>

      

      <div className="admin-info">

        <h2>Dashboard Overview</h2>

        <p>
          This admin panel allows you to perform all CRUD operations
          securely. Only authenticated administrators can create,
          update or delete food items. Regular users can only
          browse foods, recipes and build their favourite combos.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;