 
 import logo from './logo.svg';
import React, { useEffect } from "react";
import './input.css';
import Navbar from './components/Navbar';
import Arrivals from './components/Arrivals';
import BestSelling from './components/BestSelling';
import Hero from './components/Hero';
import Insta from './components/Insta';
import Footer from './components/Footer';
 

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
 
     <div className="App overflow-x-hidden relative" style={{background: "#F6E7E5"}}> 
      <div className="loading"></div>

      <div className="App">
        <Navbar />
        <Hero />
        <Arrivals />
        <BestSelling />
        <Insta/>
      <Footer/>
      </div>
 
    </div>
  );
}

export default App;
