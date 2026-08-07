import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    const adminUser = "admin";
    const adminPass = "admin123";

    if (username === adminUser && password === adminPass) {
      localStorage.setItem("admin", "true");

      alert("✅ Login Successful");

      navigate("/dashboard");

      window.location.reload();
    } else {
      alert("❌ Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>👨‍💼 Admin Login</h1>

        <p>
          Only administrators can access the dashboard.
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="login-info">

          <h3>Demo Credentials</h3>

          <p>
            <strong>Username:</strong> admin
          </p>

          <p>
            <strong>Password:</strong> admin123
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;