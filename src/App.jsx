import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// User Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Recipes from "../pages/Recipes";
import RecipeDetails from "../pages/RecipeDetails";
import BuildCombo from "../pages/BuildCombo";
import Checkout from "../pages/Checkout";


// Category Pages
import Veg from "../categories/Veg";
import NonVeg from "../categories/NonVeg";
import Desserts from "../categories/Desserts";
import Drinks from "../categories/Drinks";
import Healthy from "../categories/Healthy";

// Admin Pages
import Login from "../Admin/Login";
import Dashboard from "../Admin/Dashboard";
import AddFood from "../Admin/AddFood";
import EditFood from "../Admin/EditFood";
import ManageFoods from "../Admin/ManageFoods";

function App() {
  const isLoggedIn = localStorage.getItem("admin") === "true";

  return (
    <>
      <Navbar />

      <Routes>
        {/* User Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/buildcombo" element={<BuildCombo />} />
        <Route path="/checkout" element={<Checkout />} />
        

        {/* Category Pages */}
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/healthy" element={<Healthy />} />

        {/* Admin Login */}
        <Route path="/admin" element={<Login />} />

        {/* Protected Admin Pages */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/admin" replace />}
        />

        <Route
          path="/addfood"
          element={isLoggedIn ? <AddFood /> : <Navigate to="/admin" replace />}
        />

        <Route
          path="/managefoods"
          element={isLoggedIn ? <ManageFoods /> : <Navigate to="/admin" replace />}
        />

        <Route
          path="/editfood/:id"
          element={isLoggedIn ? <EditFood /> : <Navigate to="/admin" replace />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;