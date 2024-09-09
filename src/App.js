import React, { useEffect } from "react";
import "./input.css";
import Navbar from "./components/Navbar";
import Arrivals from "./components/Arrivals";
import BestSelling from "./components/BestSelling";
import Hero from "./components/Hero";

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
    <div className="relative">
      <div className="loading"></div>

      <div className="App">
        <Navbar />
        <Hero />
        <Arrivals />
        <BestSelling />
      </div>
    </div>
  );
}

export default App;
