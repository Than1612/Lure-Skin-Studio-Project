import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./input.css";
import Navbar from "./components/Navbar.jsx";
import Arrivals from "./components/Arrivals.jsx";
import BestSelling from "./components/BestSelling.jsx";
import Hero from "./components/Hero.jsx";
import Insta from "./components/Insta.jsx";
import Footer from "./components/Footer.jsx";
import Extra from "./components/Extra.jsx";
import Products from "./components/products.jsx";
import Blog from "./components/blog.jsx";
import Policy from "./components/policy.jsx";
import CartPage from "./components/Cart.jsx";
import PaymentTest from "./components/PaymentTest.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("userToken");
    return token ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    const loadingScreen = document.querySelector(".loading");

    const handleAnimationEnd = () => {
      document.body.style.overflow = "auto";
      loadingScreen.style.display = "none";
    };

    loadingScreen.addEventListener("animationend", handleAnimationEnd);

    return () => {
      loadingScreen.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  return (
    <Router>
      <div
        className="App overflow-x-hidden relative"
        style={{ background: "#F6E7E5" }}
      >
        <div className="loading"></div>

        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Hero /><Arrivals /><BestSelling /><Extra /><Insta /></>} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage cartItems={cartItems} />
              </PrivateRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <PaymentTest />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
