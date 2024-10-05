 
import logo from './logo.svg';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './input.css';
import Navbar from './components/Navbar';
import Arrivals from './components/Arrivals';
import BestSelling from './components/BestSelling';
import Hero from './components/Hero';
import Insta from './components/Insta';
import Footer from './components/Footer';
import Extra from './components/Extra';
import Products from './components/products'
 

function App() {
  useEffect(() => {
    const loadingScreen = document.querySelector(".loading");

    const handleAnimationEnd = () => {
      document.body.style.overflow = "auto"; // Reset overflow to auto
      loadingScreen.style.display = "none"; // Optionally hide the loading element
    };

    loadingScreen.addEventListener("animationend", handleAnimationEnd);

    return () => {
      loadingScreen.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <Router>
      <div className="App overflow-x-hidden relative" style={{ background: "#F6E7E5" }}>
        <div className="loading"></div>

        <Navbar />
        
        <Routes>
          {/* Route for the homepage */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Arrivals />
                <BestSelling />
                <Extra />
                <Insta />
              </>
            }
          />

          {/* Route for the products page */}
          <Route path="/products" element={<Products />} />
        </Routes>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
