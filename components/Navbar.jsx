import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("admin") === "true";

  const logout = () => {
    localStorage.removeItem("admin");
    alert("Logged out successfully!");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        🍔 Foodiee
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/recipes">Recipes</Link>
        </li>

        <li>
          <Link to="/buildcombo">Build Combo</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {!isLoggedIn ? (
          <li>
            <Link className="admin-btn" to="/admin">
              Admin
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link className="dashboard-btn" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;