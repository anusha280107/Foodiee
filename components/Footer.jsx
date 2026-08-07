import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-box">
          <h2>🍔 Foodiee</h2>

          <p>
            Fresh Food, Great Taste, Fast Delivery.
            Discover delicious recipes and build your
            own favorite combo with Foodiee.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/recipes">Recipes</Link>

          <Link to="/buildcombo">Build Combo</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📍 Chennai, Tamil Nadu</p>

          <p>📞 +91 9876543210</p>

          <p>✉ foodiee@gmail.com</p>

        </div>

        {/* Social */}

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">🌐</a>

            <a href="#">📘</a>

            <a href="#">📸</a>

            <a href="#">🐦</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © 2026 Foodiee | All Rights Reserved

      </div>

    </footer>
  );
}

export default Footer;